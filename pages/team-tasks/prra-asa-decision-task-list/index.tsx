import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Button, Fieldset, FormGroup, H3, Heading, LeadParagraph, Link as LinkGds, Paragraph, Select, Table, Tag } from 'govuk-react'
import Link from 'next/link'
import type { DecisionTask } from '../../../types/decisionTask';
import Router from 'next/router';

const TaskList: NextPage = (props: any) => {
  const rawData = props.taskData.filter((item: DecisionTask) => (!item.allocatedTo && !item.started));
  const [tableData, setTableData] = useState<DecisionTask[]>(rawData);
  const [sortField, setSortField] = useState<string>('dueDate');
  const [sortDirection, setSortDirection] = useState<string>('asc');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterType, setFilterType] = useState<string[]>([]);
  const [selectTask, setSelectTask] = useState<boolean>(false);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [allocateTo, setAllocateTo] = useState<string>('Me');

  const decisionTaskTypes: string[] = [
    'Childcare on domestic premises',
    'Childcare on non-domestic premises',
    'Childminder',
    'Home childcarer',
  ];

  useEffect(() => {
    const removedTaskIds: number[] = [];

    setTableData(rawData.sort((a: any, b: any) => {
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

    // remove any selected tasks that have been filtered
    setSelectedTasks(selectedTasks.filter((task: number) => !removedTaskIds.includes(task)));
  }, [filterType, sortField, sortDirection]);

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
      if (isNaN(applicationId)) { // select all
        setSelectedTasks(tableData.map((item: DecisionTask) => item.applicationId));
      } else {
        setSelectedTasks([...selectedTasks, applicationId]);
      }
    } else {
      if (isNaN(applicationId)) { // deselect all
        setSelectedTasks([]);
      } else {
        setSelectedTasks(selectedTasks.filter((item: number) => item !== applicationId));
      }
    }
  };

  const allocateTasks = () => {
    setTableData(tableData.filter((item: DecisionTask) => !selectedTasks.includes(item.applicationId)));
    props.allocateTasks(selectedTasks, allocateTo);
    setSelectedTasks([]);
    setSelectTask(false);

    if (allocateTo === 'Me') {
      Router.push('/personal-tasks');
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
            <div className="govuk-checkboxes govuk-checkboxes--small govuk-checkboxes--in-table-cell">
              <input className="govuk-checkboxes__input" checked={selectedTasks.includes(task.applicationId)} onChange={updateSelectedTasks} type="checkbox" value={task.applicationId} />
              <label className="govuk-label govuk-checkboxes__label"></label>
            </div>
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
        {!selectTask &&
          <Table.Cell>
            <Link href={{pathname: '/team-tasks/prra-asa-decision-task-list/prra', query: {applicationId: task.applicationId}}} passHref><a className="govuk-link">Start task</a></Link>
          </Table.Cell>
        }
      </Table.Row>
    )
  });

  const filters = decisionTaskTypes.map((item: string, index: number) => {
    const matchCount = rawData.filter((decisionTask: DecisionTask) => decisionTask.type === item).length;

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
        PRRA/ASA Decision
      </Heading>
      {tableRows.length === 0 &&
        <LeadParagraph>There are no tasks to allocate</LeadParagraph>
      }
      {tableRows.length > 0 &&
        <>
          <LeadParagraph>
            <b>Start task or select task to allocate</b>
          </LeadParagraph>
          <Paragraph>Start task or select task to allocate to team members to complete PRRA/ASA decision</Paragraph>
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
          <Table head={
            <Table.Row>
              {selectTask &&
                <Table.CellHeader>
                  <div className="govuk-checkboxes govuk-checkboxes--small govuk-checkboxes--in-table-cell">
                    <input className="govuk-checkboxes__input" checked={selectedTasks.length === tableData.length} onChange={updateSelectedTasks} type="checkbox" value="all" />
                    <label className="govuk-label govuk-checkboxes__label"></label>
                  </div>
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
              {!selectTask &&
                <Table.CellHeader></Table.CellHeader>
              }
            </Table.Row>
          }>
            {tableRows}
          </Table>
          {!selectTask &&
            <Button onClick={() => setSelectTask(true)}>Select task</Button>
          }
          {selectTask && selectedTasks.length > 0 &&
          <>
            <FormGroup>
              <Select
                input={{
                  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {setAllocateTo(e.target.value)},
                }}
                label={`Allocate PRRA/ASA task${selectedTasks.length > 1 ? 's' : ''} to`}>
                <option value="Me">
                  Me
                </option>
                <option value="Person 1">
                  Person 1
                </option>
                <option value="Person 2">
                  Person 2
                </option>
                <option value="Person 3">
                  Person 3
                </option>
              </Select>
            </FormGroup>
            <Button onClick={allocateTasks}>Allocate task{selectedTasks.length > 1 && 's'}</Button>
          </>
          }
          {selectTask &&
            <button className='govuk-button govuk-button--secondary' onClick={() => {setSelectTask(false); setSelectedTasks([]);}}>Cancel</button>
          }
        </>
      }
    </>
  )
}

export default TaskList
