import type { NextPage } from 'next'
import { Heading, Link as LinkGds, Table } from 'govuk-react'
import Link from 'next/link'

const TeamTasks: NextPage = () => {
  return (
    <>
      <Heading>
        Team tasks
      </Heading>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Task name</Table.CellHeader>
          <Table.CellHeader>Total</Table.CellHeader>
          <Table.CellHeader>Task oldest date</Table.CellHeader>
          <Table.CellHeader></Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.CellHeader>
            PRRA/ASA decision
          </Table.CellHeader>
          <Table.Cell>
            20
          </Table.Cell>
          <Table.Cell>
            9 Sep 2022
          </Table.Cell>
          <Table.Cell>
            <Link href="/team-tasks/prra-asa-decision-task-list">View PRRA/ASA</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>
            Resignation request
          </Table.CellHeader>
          <Table.Cell>
            5
          </Table.Cell>
          <Table.Cell>
            2 Aug 2022
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">View resignation request</LinkGds>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>
            CFC proposed
          </Table.CellHeader>
          <Table.Cell>
            15
          </Table.Cell>
          <Table.Cell>
            10 Aug 2022
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">View CFC proposed</LinkGds>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>
            CFC active
          </Table.CellHeader>
          <Table.Cell>
            15
          </Table.Cell>
          <Table.Cell>
            12 Aug 2022
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">View CFC active</LinkGds>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>
            Checks
          </Table.CellHeader>
          <Table.Cell>
            16
          </Table.Cell>
          <Table.Cell>
            15 Aug 2022
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">View checks</LinkGds>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>
            Risk assessment
          </Table.CellHeader>
          <Table.Cell>
            16
          </Table.Cell>
          <Table.Cell>
            20 Aug 2022
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">View risk assessment</LinkGds>
          </Table.Cell>
        </Table.Row>
      </Table>
    </>
  )
}

export default TeamTasks
