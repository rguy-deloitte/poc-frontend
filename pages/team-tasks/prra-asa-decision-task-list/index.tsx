import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { H3, Heading, LeadParagraph, Link as LinkGds, LoadingBox, Paragraph, Table, Tag } from 'govuk-react'
import Link from 'next/link'
import type { DecisionTask } from '../../../types/decisionTask';

const TaskList: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [decisionTasks, setDecisionTasks] = useState<DecisionTask[]>([]);
  const [sortField, setSortField] = useState<string>('dueDate');
  const [sortDirection, setSortDirection] = useState<string>('asc');

  useEffect(() => {
    fetch('/api/decision-tasks')
      .then((response: any) => response.json())
      .then((data: DecisionTask[]) => {
        setDecisionTasks(data);
        setLoading(false);
      });
  }, []);

  const tableRows = decisionTasks.sort((a: any, b: any) => {
    if (a[sortField] < b[sortField]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortField] > b[sortField]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  })
  .map((task: DecisionTask, index: number) => {
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
          <Link href="/team-tasks/prra-asa-decision-task-list/prra">Start task</Link>
        </Table.Cell>
      </Table.Row>
    )
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
      <H3>
        Task list
      </H3>
      <LoadingBox loading={loading}>
        <Table head={
          <Table.Row>
            <Table.CellHeader>
              Application ID
              <button onClick={() => {setSortField('applicationId'); setSortDirection('asc');}}>Asc</button>
              <button onClick={() => {setSortField('applicationId'); setSortDirection('dsc');}}>Dsc</button>
            </Table.CellHeader>
            <Table.CellHeader>
              Provider
              <button onClick={() => {setSortField('provider'); setSortDirection('asc');}}>Asc</button>
              <button onClick={() => {setSortField('provider'); setSortDirection('dsc');}}>Dsc</button>
            </Table.CellHeader>
            <Table.CellHeader>
              Type
              <button onClick={() => {setSortField('type'); setSortDirection('asc');}}>Asc</button>
              <button onClick={() => {setSortField('type'); setSortDirection('dsc');}}>Dsc</button>
            </Table.CellHeader>
            <Table.CellHeader>
              Register
              </Table.CellHeader>
            <Table.CellHeader>
              Task type
              <button onClick={() => {setSortField('taskType'); setSortDirection('asc');}}>Asc</button>
              <button onClick={() => {setSortField('taskType'); setSortDirection('dsc');}}>Dsc</button>
            </Table.CellHeader>
            <Table.CellHeader>
              Start date
              <button onClick={() => {setSortField('startDate'); setSortDirection('asc');}}>Asc</button>
              <button onClick={() => {setSortField('startDate'); setSortDirection('dsc');}}>Dsc</button>
            </Table.CellHeader>
            <Table.CellHeader>
              Due date
              <button onClick={() => {setSortField('dueDate'); setSortDirection('asc');}}>Asc</button>
              <button onClick={() => {setSortField('dueDate'); setSortDirection('dsc');}}>Dsc</button>
            </Table.CellHeader>
            <Table.CellHeader></Table.CellHeader>
          </Table.Row>
        }>
          {tableRows}
        </Table>
      </LoadingBox>
    </>
  )
}

export default TaskList
