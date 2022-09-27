import type { NextPage } from 'next'
import { Button, Caption, GridCol, GridRow, Heading, LeadParagraph, Link, Paragraph, Table, Tag } from 'govuk-react'
import PrraForm from '../components/forms/prra/prraForm';

const Home: NextPage = () => {
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
        <Tag tint="BLUE">
          In progress
        </Tag>
      </LeadParagraph>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <Heading as="h2" size="MEDIUM">
            Application details
          </Heading>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Application typev
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
                <Link href="#">
                  EYO
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Setting registration form
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EYS
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Registered individual
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EY2_Jane Thomas
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Nominated individual
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EY2_Patrick Carlson
                </Link>
              </Table.Cell>
            </Table.Row>
          </Table>
          <Heading as="h2" size="MEDIUM">
            Before you start
          </Heading>
          <Paragraph>
            Please complete the sections below to detail the outcome of your investigation into the application to register. Once all relevant parts are completed, please click 'Save' at the bottom.
          </Paragraph>
          <PrraForm />
          <Button>
            Save
          </Button>
        </GridCol>
        <GridCol setWidth="one-third">
          <Heading as="h2" size="MEDIUM">
            Links
          </Heading>
          <Paragraph supportingText>
            [Provider summary](#)
          </Paragraph>
          <Paragraph supportingText>
            [Organisation summary](#)
          </Paragraph>
          <Paragraph supportingText>
            [Application summary](#)
          </Paragraph>
        </GridCol>
      </GridRow>
    </>
  )
}

export default Home
