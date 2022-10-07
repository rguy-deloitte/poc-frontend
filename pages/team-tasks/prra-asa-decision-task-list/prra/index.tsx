import type { NextPage } from 'next'
import { Caption, GridCol, GridRow, H2, Heading, LeadParagraph, Link as LinkGds, Paragraph, Table, Tag } from 'govuk-react'
import PrraForm from '../../../../components/forms/prra/prraForm';
import Link from 'next/link';

const Prra: NextPage = () => {
  return (
    <>
      <Caption>
        Provider: Sunshine Nursery<br />
        URN: 1234237
       </Caption>
      <Heading>
        PRRA
      </Heading>
      <LeadParagraph>
        <b>Task with: Jane Doe<br />
        Last update date: 31 Aug 2022</b>
        <span className='tag-wrapper'>
          <Tag tint="BLUE">
            In progress
          </Tag>
        </span>
      </LeadParagraph>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <H2>
            Application details
          </H2>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Application type
              </Table.CellHeader>
              <Table.Cell>
                Childcare on domestic premises
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Register
              </Table.CellHeader>
              <Table.Cell>
                EYR
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Responsible body
              </Table.CellHeader>
              <Table.Cell>
                Sunshine Ltd
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Registration form
              </Table.CellHeader>
              <Table.Cell>
                <LinkGds href="#">
                  EYO
                </LinkGds>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Setting registration form
              </Table.CellHeader>
              <Table.Cell>
                <LinkGds href="#">
                  EYS
                </LinkGds>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Registered individual
              </Table.CellHeader>
              <Table.Cell>
                <LinkGds href="#">
                  EY2_Jane Thomas
                </LinkGds>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Nominated individual
              </Table.CellHeader>
              <Table.Cell>
                <LinkGds href="#">
                  EY2_Patrick Carlson
                </LinkGds>
              </Table.Cell>
            </Table.Row>
          </Table>
          <H2>
            Before you start
          </H2>
          <Paragraph>
            Please complete the sections below to detail the outcome of your investigation into the application to register. Once all relevant parts are completed, please click 'Save' at the bottom.
          </Paragraph>
          <PrraForm />
        </GridCol>
        <GridCol setWidth="one-third">
          <H2>
            Links
          </H2>
          <Paragraph supportingText>
            [Provider summary](#)
          </Paragraph>
          <Paragraph supportingText>
            [Organisation summary](#)
          </Paragraph>
          <p>
            <Link href="/team-tasks/prra-asa-decision-task-list/prra/application-summary">Application summary</Link>
          </p>
          <Paragraph supportingText>
            [Inspection history](#)
          </Paragraph>
        </GridCol>
      </GridRow>
    </>
  )
}

export default Prra
