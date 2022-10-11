import type { NextPage } from 'next'
import { Caption, GridCol, GridRow, H1, H2, H3, LeadParagraph, Link, Paragraph, Table, Tag } from 'govuk-react'

const Dbs: NextPage = () => {
  return (
    <>
      <Caption>
        Individual: Jane Smith<br />
        Individual ID: 1234234
      </Caption>
      <H1>DBS</H1>
      <LeadParagraph>
        <b>Person in charge:-<br />
        Last update date: 5 Sep 2022</b>
        <span className='tag-wrapper'>
          <Tag tint="GREEN">
            Suitable
          </Tag>
        </span>
      </LeadParagraph>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <H2>Details</H2>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Certificate number
              </Table.CellHeader>
              <Table.Cell>
                001462174043
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Status
              </Table.CellHeader>
              <Table.Cell>
                Suitable
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Concern status
              </Table.CellHeader>
              <Table.Cell>
                Cleared
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Update service
              </Table.CellHeader>
              <Table.Cell>
                Registered
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Update service result
              </Table.CellHeader>
              <Table.Cell>
                Clear - no change
              </Table.Cell>
            </Table.Row>
          </Table>
          <H2>Comments</H2>
          <Table head={
            <Table.Row>
              <Table.CellHeader>Name</Table.CellHeader>
              <Table.CellHeader>Date</Table.CellHeader>
              <Table.CellHeader>Comment</Table.CellHeader>
            </Table.Row>
          }>
            <Table.Row>
              <Table.Cell>
                Marc Lane
              </Table.Cell>
              <Table.Cell>
                25/01/2022
              </Table.Cell>
              <Table.Cell>
                xxxxx
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Lynn Erickson
              </Table.Cell>
              <Table.Cell>
                10/02/2022
              </Table.Cell>
              <Table.Cell>
                xxxxx
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                Sonia Thompson
              </Table.Cell>
              <Table.Cell>
                18/01/2022
              </Table.Cell>
              <Table.Cell>
                xxxxx
              </Table.Cell>
            </Table.Row>
          </Table>
        </GridCol>
      </GridRow>
    </>
  )
};

export default Dbs