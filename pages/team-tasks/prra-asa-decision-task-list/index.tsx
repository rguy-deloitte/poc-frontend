import type { NextPage } from 'next'
import { H3, Heading, LeadParagraph, Link as LinkGds, Paragraph, Table, Tag } from 'govuk-react'
import Link from 'next/link'

const TaskList: NextPage = () => {
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
      <Table head={
        <Table.Row>
          <Table.CellHeader>Application ID</Table.CellHeader>
          <Table.CellHeader>Provider</Table.CellHeader>
          <Table.CellHeader>Type</Table.CellHeader>
          <Table.CellHeader>Register</Table.CellHeader>
          <Table.CellHeader>Task type</Table.CellHeader>
          <Table.CellHeader>Start date</Table.CellHeader>
          <Table.CellHeader>Due date</Table.CellHeader>
          <Table.CellHeader></Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell>
            <LinkGds href='#'>424724</LinkGds>
          </Table.Cell>
          <Table.Cell>
            Sunshine Nursery
          </Table.Cell>
          <Table.Cell>
            Childcare on non-domestic premises
          </Table.Cell>
          <Table.Cell>
            EYR
          </Table.Cell>
          <Table.Cell>
            PRRA
          </Table.Cell>
          <Table.Cell>
            22 Aug 2022
          </Table.Cell>
          <Table.Cell>
            11 Sep 2022<br />
            <Tag tint="YELLOW">Due soon</Tag>
          </Table.Cell>
          <Table.Cell>
            <Link href="/team-tasks/prra-asa-decision-task-list/prra">Start task</Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <LinkGds href='#'>700555</LinkGds>
          </Table.Cell>
          <Table.Cell>
            Bear House
          </Table.Cell>
          <Table.Cell>
            Childcare on non-domestic premises
          </Table.Cell>
          <Table.Cell>
            EYR, CCR, VCR
          </Table.Cell>
          <Table.Cell>
            PRRA
          </Table.Cell>
          <Table.Cell>
            24 Aug 2022
          </Table.Cell>
          <Table.Cell>
            11 Sep 2022<br />
            <Tag tint="YELLOW">Due soon</Tag>
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">Start task</LinkGds>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <LinkGds href='#'>309565</LinkGds>
          </Table.Cell>
          <Table.Cell>
            Twinkle Twinkle Little Star House
          </Table.Cell>
          <Table.Cell>
            Childcare on non-domestic premises
          </Table.Cell>
          <Table.Cell>
            CCR
          </Table.Cell>
          <Table.Cell>
            ASA
          </Table.Cell>
          <Table.Cell>
            30 Aug 2022
          </Table.Cell>
          <Table.Cell>
            22 Oct 2022<br />
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">Start task</LinkGds>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <LinkGds href='#'>309565</LinkGds>
          </Table.Cell>
          <Table.Cell>
            Sarah Doe Edwards
          </Table.Cell>
          <Table.Cell>
            Childminder
          </Table.Cell>
          <Table.Cell>
            CCR
          </Table.Cell>
          <Table.Cell>
            ASA
          </Table.Cell>
          <Table.Cell>
            30 Aug 2022
          </Table.Cell>
          <Table.Cell>
            23 Oct 2022<br />
          </Table.Cell>
          <Table.Cell>
            <LinkGds href="#">Start task</LinkGds>
          </Table.Cell>
        </Table.Row>
      </Table>
    </>
  )
}

export default TaskList
