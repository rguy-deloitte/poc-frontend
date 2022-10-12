import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { H3, Heading, Link as LinkGds, LoadingBox, Paragraph, Table } from 'govuk-react'
import type { DecisionTask } from '../types/decisionTask';
import Fuse from 'fuse.js';

const Search: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [decisionTasks, setDecisionTasks] = useState<DecisionTask[]>([]);
  const [tableData, setTableData] = useState<DecisionTask[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('/api/decision-tasks')
      .then((response: any) => response.json())
      .then((data: DecisionTask[]) => {
        setDecisionTasks(data);
        setLoading(false);
        setTableData(data);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const fuse = new Fuse(decisionTasks, {
        keys: [
          'applicationId',
          'provider',
          'type',
          'taskType'
        ],
        threshold: 0.4,
      });

      setTableData(decisionTasks.filter((item: DecisionTask) => fuse.search(searchTerm).map((item) => item.item.applicationId).includes(item.applicationId)));
    } else {
      setTableData(decisionTasks);
    }


  }, [searchTerm]);

  const tableRows = tableData.map((task: DecisionTask, index: number) => {
    const startDate: Date = new Date(task.startDate);
    const dueDate: Date = new Date(task.dueDate);

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
          {task.taskType}
        </Table.Cell>
      </Table.Row>
    )
  });

  return (
    <>
      <Heading>
        Search
      </Heading>
      <div className="govuk-form-group">
        <h1 className="govuk-label-wrapper"><label className="govuk-label govuk-label--l" htmlFor="searchTerm">
            Search the task list
          </label>
        </h1>
        <input className="govuk-input" id="searchTerm" name="searchTerm" onChange={(e) => setSearchTerm(e.target.value)} type="text" value={searchTerm} />
      </div>
      <H3>
        Task list
      </H3>
      {!loading && tableRows.length === 0 &&
        <Paragraph>There are no tasks to display</Paragraph>
      }
      {(loading || tableRows.length > 0) &&
        <>
          <LoadingBox loading={loading}>
            <Table head={
              <Table.Row>
                <Table.CellHeader>
                  Application ID
                </Table.CellHeader>
                <Table.CellHeader>
                  Provider
                </Table.CellHeader>
                <Table.CellHeader>
                  Type
                </Table.CellHeader>
                <Table.CellHeader>
                  Task type
                </Table.CellHeader>
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

export default Search
