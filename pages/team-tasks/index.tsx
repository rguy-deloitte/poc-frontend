import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Heading, Link as LinkGds, LoadingBox, Table } from 'govuk-react'
import Link from 'next/link'
import type { TeamTask } from '../../types/teamTask';

const TeamTasks: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [teamTasks, setTeamTasks] = useState<TeamTask[]>([]);

  useEffect(() => {
    fetch('/api/team-tasks')
      .then((response: any) => response.json())
      .then((data: TeamTask[]) => {
        setTeamTasks(data);
        setLoading(false);
      })
  });

  const tableRows = teamTasks.map((task: TeamTask, index: number) => {
    const oldestDate: Date = new Date(task.taskOldestDate);

    return (
      <Table.Row key={index}>
        <Table.CellHeader>
          {task.taskName}
        </Table.CellHeader>
        <Table.Cell>
          {task.total}
        </Table.Cell>
        <Table.Cell>
          {oldestDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}
        </Table.Cell>
        <Table.Cell>
          <Link href={task.taskUrl}>{`View ${task.taskType}`}</Link>
        </Table.Cell>
      </Table.Row>
    )
  });

  return (
    <>
      <Heading>
        Team tasks
      </Heading>
      <LoadingBox loading={loading}>
        <Table head={
          <Table.Row>
            <Table.CellHeader>Task name</Table.CellHeader>
            <Table.CellHeader>Total</Table.CellHeader>
            <Table.CellHeader>Task oldest date</Table.CellHeader>
            <Table.CellHeader></Table.CellHeader>
          </Table.Row>
        }>
          {tableRows}
        </Table>
      </LoadingBox>
    </>
  )
}

export default TeamTasks
