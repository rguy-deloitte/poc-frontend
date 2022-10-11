import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Fieldset, H3, Heading, Link as LinkGds, LoadingBox, Paragraph, Table, Tag } from 'govuk-react'
import Link from 'next/link'
import type { DecisionTask } from '../types/decisionTask';

const PersonalTaskList: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [decisionTasks, setDecisionTasks] = useState<DecisionTask[]>([]);
  const [tableData, setTableData] = useState<DecisionTask[]>([]);
  const [sortField, setSortField] = useState<string>('dueDate');
  const [sortDirection, setSortDirection] = useState<string>('asc');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string[]>([]);

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
      setTableData(decisionTasks.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      })
      .filter((item: DecisionTask) => {
        if (filterType.length === 0) {
          return true;
        }

        return filterType.includes(item.type);
      }));
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

  const tableRows = tableData.map((task: DecisionTask, index: number) => {
    const startDate: Date = new Date(task.startDate);
    const dueDate: Date = new Date(task.dueDate);
    const currentDate: Date = new Date();
    const dateDifferene = Math.floor((Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())) / 86400000);

    return (
      <Table.Row key={index}>
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
          <Link href="/team-tasks/prra-asa-decision-task-list/prra" passHref><a className="govuk-link">Start task</a></Link>
        </Table.Cell>
      </Table.Row>
    )
  });

  const filters = decisionTaskTypes.map((item: string, index: number) => {
    const matchCount = decisionTasks.filter((decisionTask: DecisionTask) => decisionTask.type === item).length;

    return (
      <div className="govuk-checkboxes__item">
        <input checked={filterType.includes(item)} className="govuk-checkboxes__input" disabled={matchCount === 0} id={`filterTypeCheckbox${index}`} key={index} onChange={updateFilterType} type="checkbox" value={item} />
        <label className="govuk-label govuk-checkboxes__label" htmlFor={`filterTypeCheckbox${index}`}>{item} ({matchCount})</label>
      </div>
    );
  });

  return (
    <>
      <Heading>
        Personal tasks
      </Heading>
      <button className='govuk-button govuk-button--secondary' onClick={() => {setShowFilter(!showFilter)}}>{showFilter ? 'Hide' : 'Show'} filter</button>
      {showFilter &&
        <div className='filter'>
          <H3>Filter</H3>
          <Fieldset>
            <Fieldset.Legend>Type</Fieldset.Legend>
            <div className="govuk-checkboxes govuk-checkboxes--small">
              {filters}
            </div>
          </Fieldset>
        </div>
      }
      <H3>
        Task list
      </H3>
      {!loading && tableRows.length === 0 &&
        <Paragraph>There are no tasks to allocate</Paragraph>
      }
      {(loading || tableRows.length > 0) &&
        <>
          <LoadingBox loading={loading}>
            <Table head={
              <Table.Row>
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
        </>
      }
    </>
  )
}

export default PersonalTaskList
