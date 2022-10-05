import { H1, H3 } from 'govuk-react';
import type { NextPage } from 'next'
import { Caption, GridCol, GridRow, H2, Heading, LeadParagraph, Link, Paragraph, Table, Tag } from 'govuk-react'

const ApplicationSummary: NextPage = () => {
  return (
    <>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <div className="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
            <div className="govuk-notification-banner__header">
              <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
                Important
              </h2>
            </div>
            <div className="govuk-notification-banner__content">
              <p className="govuk-notification-banner__heading">
                <a className="govuk-notification-banner__link" href="#">Patrick Stuart</a> has withdrawn the application.
                <br />
                <a className="govuk-notification-banner__link" href="#">Lilly Smith</a> has withdrawn the application.
                <br />
                <a className="govuk-notification-banner__link" href="#">Social services</a> check for <a className="govuk-notification-banner__link" href="#">Julie Jane</a> has been received.
              </p>
            </div>
          </div>
        </GridCol>
      </GridRow>
      <H1>Application Summary</H1>
      <LeadParagraph>
        <b>Provider URN: 1234237<br />
        ID: 1234124<br />
        Application type: Childcare on domestic premises<br />
        Stage: 3<br />
        Last update date: 1 Sep 2022</b>
        <span className='tag-wrapper'>
          <Tag tint="BLUE">
            In progress
          </Tag>
        </span>
      </LeadParagraph>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <H2>
            Details
          </H2>
          <H3>
            Provider
          </H3>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Responsible body
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  Sunshine Ltd
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Provider URN
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  1234623
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Provider name
              </Table.CellHeader>
              <Table.Cell>
                Sunshine Nursery
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Register
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EYR
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Register from
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
          </Table>
          <H3>
            Applicant
          </H3>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Name
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  Jane Smith
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Role
              </Table.CellHeader>
              <Table.Cell>
                Registered individual
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Application form
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EY2
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Status
              </Table.CellHeader>
              <Table.Cell>
                Proposed
              </Table.Cell>
            </Table.Row>
          </Table>
          <Table head={
            <Table.Row>
              <Table.CellHeader>Check</Table.CellHeader>
              <Table.CellHeader>Form</Table.CellHeader>
              <Table.CellHeader>Status</Table.CellHeader>
              <Table.CellHeader>Last update</Table.CellHeader>
            </Table.Row>
          }>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  DBS
                </Link>
              </Table.Cell>
              <Table.Cell>
                -
              </Table.Cell>
              <Table.Cell>
                Suitable
              </Table.Cell>
              <Table.Cell>
                15th Jul 2022
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  Social Services
                </Link>
              </Table.Cell>
              <Table.Cell>
                Swindon Local Authority
              </Table.Cell>
              <Table.Cell>
                Awaiting information
              </Table.Cell>
              <Table.Cell>
                15th Aug 2022
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  Reference 1
                </Link>
              </Table.Cell>
              <Table.Cell>
                Charlie Edwards
              </Table.Cell>
              <Table.Cell>
                Suitable
              </Table.Cell>
              <Table.Cell>
                15th MAy 2022
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  Reference 2
                </Link>
              </Table.Cell>
              <Table.Cell>
                Mary Louis
              </Table.Cell>
              <Table.Cell>
                Suitable
              </Table.Cell>
              <Table.Cell>
                15th Jun 2022
              </Table.Cell>
            </Table.Row>
          </Table>
          <H3>
          Association
          </H3>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Name
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  Julie Jane
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Role
              </Table.CellHeader>
              <Table.Cell>
                Registered individual
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Application form
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EY2
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Status
              </Table.CellHeader>
              <Table.Cell>
                Active
              </Table.Cell>
            </Table.Row>
          </Table>
          <Table head={
            <Table.Row>
              <Table.CellHeader>Check</Table.CellHeader>
              <Table.CellHeader>Form</Table.CellHeader>
              <Table.CellHeader>Status</Table.CellHeader>
              <Table.CellHeader>Last update</Table.CellHeader>
            </Table.Row>
          }>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  DBS
                </Link>
              </Table.Cell>
              <Table.Cell>
                -
              </Table.Cell>
              <Table.Cell>
                Suitable
              </Table.Cell>
              <Table.Cell>
                15th Jul 2022
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  Social Services
                </Link>
              </Table.Cell>
              <Table.Cell>
                Swindon Local Authority
              </Table.Cell>
              <Table.Cell>
                Awaiting information
              </Table.Cell>
              <Table.Cell>
                15th Aug 2022
              </Table.Cell>
            </Table.Row>
          </Table>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Name
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  Lilly Smith
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Role
              </Table.CellHeader>
              <Table.Cell>
                Nominated individual
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Application form
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EY2
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Status
              </Table.CellHeader>
              <Table.Cell>
                Proposed
              </Table.Cell>
            </Table.Row>
          </Table>
          <Table head={
            <Table.Row>
              <Table.CellHeader>Check</Table.CellHeader>
              <Table.CellHeader>Form</Table.CellHeader>
              <Table.CellHeader>Status</Table.CellHeader>
              <Table.CellHeader>Last update</Table.CellHeader>
            </Table.Row>
          }>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  DBS
                </Link>
              </Table.Cell>
              <Table.Cell>
                -
              </Table.Cell>
              <Table.Cell>
                Suitable
              </Table.Cell>
              <Table.Cell>
                15th Jul 2022
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  Social Services
                </Link>
              </Table.Cell>
              <Table.Cell>
                Swindon Local Authority
              </Table.Cell>
              <Table.Cell>
                Awaiting information
              </Table.Cell>
              <Table.Cell>
                15th Aug 2022
              </Table.Cell>
            </Table.Row>
          </Table>
          <Table>
            <Table.Row>
              <Table.CellHeader>
                Name
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  Patrick Stuart
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Role
              </Table.CellHeader>
              <Table.Cell>
                Additional contact
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Application form
              </Table.CellHeader>
              <Table.Cell>
                <Link href="#">
                  EY2
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Status
              </Table.CellHeader>
              <Table.Cell>
                Withdrawn
              </Table.Cell>
            </Table.Row>
          </Table>
          <Table head={
            <Table.Row>
              <Table.CellHeader>Check</Table.CellHeader>
              <Table.CellHeader>Form</Table.CellHeader>
              <Table.CellHeader>Status</Table.CellHeader>
              <Table.CellHeader>Last update</Table.CellHeader>
            </Table.Row>
          }>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  DBS
                </Link>
              </Table.Cell>
              <Table.Cell>
                -
              </Table.Cell>
              <Table.Cell>
                Suitable
              </Table.Cell>
              <Table.Cell>
                15th Jul 2022
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Link href="#">
                  Social Services
                </Link>
              </Table.Cell>
              <Table.Cell>
                Swindon Local Authority
              </Table.Cell>
              <Table.Cell>
                Awaiting information
              </Table.Cell>
              <Table.Cell>
                15th Aug 2022
              </Table.Cell>
            </Table.Row>
          </Table>
        </GridCol>
        <GridCol setWidth="one-third">
          <H2>
            Links
          </H2>
          <Paragraph supportingText>
            [View application tasks](#)
          </Paragraph>
          <Paragraph supportingText>
            [View timeline](#)
          </Paragraph>
        </GridCol>
      </GridRow>
    </>
  )
};

export default ApplicationSummary