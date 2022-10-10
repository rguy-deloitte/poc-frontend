import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Button, Checkbox, Fieldset, H3, Heading, LeadParagraph, Link as LinkGds, LoadingBox, Paragraph, Table, Tag } from 'govuk-react'
import Link from 'next/link'
import type { DecisionTask } from '../../../types/decisionTask';

const TaskList: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [decisionTasks, setDecisionTasks] = useState<DecisionTask[]>([]);
  const [tableData, setTableData] = useState<DecisionTask[]>([]);
  const [sortField, setSortField] = useState<string>('dueDate');
  const [sortDirection, setSortDirection] = useState<string>('asc');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [selectTask, setSelectTask] = useState<boolean>(false);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const decisionTaskTypes: string[] = [
    'Childcare on domestic premises',
    'Childcare on non-domestic premises',
    'Childminder',
    'Home childcarer',
  ];

  useEffect(() => {
    fetch('/api/decision-tasks')
      .then((response: any) => response.json())
      .then((data: DecisionTask[]) => {
        setDecisionTasks(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      const removedTaskIds: number[] = [];

      setTableData(decisionTasks.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
      .filter((item: DecisionTask) => {
        if (filterType.length === 0) {
          return true;
        }

        if (!filterType.includes(item.type)) {
          removedTaskIds.push(item.applicationId);
        }

        return filterType.includes(item.type);
      }));

      // remove any tasks that have been filtered out from selected taks
      setSelectedTasks(selectedTasks.filter((task: number) => !removedTaskIds.includes(task)));

    }
  }, [decisionTasks, filterType, sortField, sortDirection]);

  const changeSort = (fieldId: string) => {
    if (sortField === fieldId) {
      setSortDirection(sortDirection === 'asc' ? 'dsc' : 'asc');
    } else {
      setSortField(fieldId);
      setSortDirection('asc');
    }
  }

  const updateFilterType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFilterType([...filterType, e.target.value]);
    } else {
      setFilterType(filterType.filter((item: string) => item !== e.target.value));
    }
  };

  const updateSelectedTasks = (e: React.ChangeEvent<HTMLInputElement>) => {
    const applicationId = parseInt(e.target.value);

    if (e.target.checked) {
      if (isNaN(applicationId)) {
        setSelectedTasks(tableData.map((item: DecisionTask) => item.applicationId));
      } else {
        setSelectedTasks([...selectedTasks, applicationId]);
      }
    } else {
      if (isNaN(applicationId)) {
        setSelectedTasks([]);
      } else {
        setSelectedTasks(selectedTasks.filter((item: number) => item !== applicationId));
      }
    }
  };

  const tableRows = tableData.map((task: DecisionTask, index: number) => {
    const startDate: Date = new Date(task.startDate);
    const dueDate: Date = new Date(task.dueDate);
    const currentDate: Date = new Date();
    const dateDifferene = Math.floor((Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / 86400000);

    return (
      <Table.Row key={index}>
        {selectTask &&
          <Table.CellHeader>
            <input checked={selectedTasks.includes(task.applicationId)} onChange={updateSelectedTasks} type="checkbox" value={task.applicationId}/>
          </Table.CellHeader>
        }
        <Table.Cell>
          <LinkGds href='#'>{task.applicationId}</LinkGds>
        </Table.Cell>
        <Table.Cell>
          {task.provider}
        </Table.Cell>
        <Table.Cell>
          {task.type}
        </Table.Cell>
        <Table.Cell>
          {task.register.join(', ')}
        </Table.Cell>
        <Table.Cell>
          {task.taskType}
        </Table.Cell>
        <Table.Cell>
          {startDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}
        </Table.Cell>
        <Table.Cell>
          {dueDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}
          {dateDifferene <= 14 && dateDifferene >= 0 && (
            <Tag tint="YELLOW">Due soon</Tag>
          )}
          {dateDifferene < 0 && (
            <Tag tint="RED">Overdue</Tag>
          )}
        </Table.Cell>
        <Table.Cell>
          <Link href="/team-tasks/prra-asa-decision-task-list/prra">Start task</Link>
        </Table.Cell>
      </Table.Row>
    )
  });

  const filters = decisionTaskTypes.map((item: string, index: number) => {
    const matchCount = decisionTasks.filter((decisionTask: DecisionTask) => decisionTask.type === item).length;

    return (
      <Checkbox disabled={matchCount === 0} key={index} onChange={updateFilterType} value={item}>{item} ({matchCount})</Checkbox>
    );
  });

  return (
    <>
      <Heading>
        PRRA/ASA Decision
      </Heading>
      <LeadParagraph>
        <b>Start task or select task to allocate</b>
      </LeadParagraph>
      <Paragraph>Start task or select task to allocate to team members to complete PRRA/ASA decision</Paragraph>
      <Button className='govuk-button--secondary' onClick={() => {setShowFilter(!showFilter)}}>{showFilter ? 'Hide' : 'Show'} filter</Button>
      {showFilter &&
        <div className='filter'>
          <H3>Filter</H3>
          <Fieldset>
            <Fieldset.Legend>Type</Fieldset.Legend>
            {filters}
          </Fieldset>
        </div>
      }
      <H3>
        Task list
      </H3>
      <LoadingBox loading={loading}>
        <Table head={
          <Table.Row>
            {selectTask &&
              <Table.CellHeader>
                <input checked={selectedTasks.length === tableData.length} onChange={updateSelectedTasks} type="checkbox" value="all" />
              </Table.CellHeader>
            }
            <Table.CellHeader>
              <button className={`sortable ${sortField === 'applicationId' ? `sortable--${sortDirection}` : ''}`} onClick={() => {changeSort('applicationId')}}>Application ID</button>
            </Table.CellHeader>
            <Table.CellHeader>
              <button className={`sortable ${sortField === 'provider' ? `sortable--${sortDirection}` : ''}`} onClick={() => {changeSort('provider')}}>Provider</button>
            </Table.CellHeader>
            <Table.CellHeader>
              <button className={`sortable ${sortField === 'type' ? `sortable--${sortDirection}` : ''}`} onClick={() => {changeSort('type')}}>Type</button>
            </Table.CellHeader>
            <Table.CellHeader>
              Register
              </Table.CellHeader>
            <Table.CellHeader>
              <button className={`sortable ${sortField === 'taskType' ? `sortable--${sortDirection}` : ''}`} onClick={() => {changeSort('taskType')}}>Task type</button>
            </Table.CellHeader>
            <Table.CellHeader>
              <button className={`sortable ${sortField === 'startDate' ? `sortable--${sortDirection}` : ''}`} onClick={() => {changeSort('startDate')}}>Start date</button>
            </Table.CellHeader>
            <Table.CellHeader>
              <button className={`sortable ${sortField === 'dueDate' ? `sortable--${sortDirection}` : ''}`} onClick={() => {changeSort('dueDate')}}>Due date</button>
            </Table.CellHeader>
            <Table.CellHeader></Table.CellHeader>
          </Table.Row>
        }>
          {tableRows}
        </Table>
      </LoadingBox>
      {!selectTask &&
        <Button onClick={() => setSelectTask(true)}>Select task</Button>
      }
      {selectTask &&
        <>
          <Button onClick={() => setSelectTask(true)}>Allocate task</Button>
          <Button className='govuk-button--secondary' onClick={() => setSelectTask(false)}>Cancel</Button>
        </>
      }
    </>
  )
}

export default TaskList
