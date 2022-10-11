import type { NextPage } from 'next'
import Link from 'next/link';
import { Caption, GridCol, GridRow, H1, H2, H3, LeadParagraph, Link as LinkGds, Paragraph, Table, Tag } from 'govuk-react'

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
                <LinkGds href="#">
                  Sunshine Ltd
                </LinkGds>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Provider URN
              </Table.CellHeader>
              <Table.Cell>
                <LinkGds href="#">
                  1234623
                </LinkGds>
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
                <LinkGds href="#">
                  EYR
                </LinkGds>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Register from
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
                <LinkGds href="#">
                  Jane Smith
                </LinkGds>
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
                <LinkGds href="#">
                  EY2
                </LinkGds>
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
                <Link href="/team-tasks/prra-asa-decision-task-list/prra/dbs" passHref>
                  <a target="_blank">DBS</a>
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
                <LinkGds href="#">
                  Social Services
                </LinkGds>
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
                <LinkGds href="#">
                  Reference 1
                </LinkGds>
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
                <LinkGds href="#">
                  Reference 2
                </LinkGds>
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
                <LinkGds href="#">
                  Julie Jane
                </LinkGds>
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
                <LinkGds href="#">
                  EY2
                </LinkGds>
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
                <Link href="/team-tasks/prra-asa-decision-task-list/prra/dbs" passHref>
                  <a target="_blank">DBS</a>
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
                <LinkGds href="#">
                  Social Services
                </LinkGds>
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
                <LinkGds href="#">
                  Lilly Smith
                </LinkGds>
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
                <LinkGds href="#">
                  EY2
                </LinkGds>
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
                <Link href="/team-tasks/prra-asa-decision-task-list/prra/dbs" passHref>
                  <a target="_blank">DBS</a>
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
                <LinkGds href="#">
                  Social Services
                </LinkGds>
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
                <LinkGds href="#">
                  Patrick Stuart
                </LinkGds>
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
                <LinkGds href="#">
                  EY2
                </LinkGds>
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
                <Link href="/team-tasks/prra-asa-decision-task-list/prra/dbs" passHref>
                  <a target="_blank">DBS</a>
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
                <LinkGds href="#">
                  Social Services
                </LinkGds>
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
          <p>
            <Link href="/team-tasks/prra-asa-decision-task-list/prra/application-tasks" passHref><a target="_blank">View application tasks</a></Link>
          </p>
          <p>
            <Link href="/team-tasks/prra-asa-decision-task-list/prra/application-timeline" passHref><a target="_blank">View timeline</a></Link>
          </p>
        </GridCol>
      </GridRow>
    </>
  )
};

export default ApplicationSummary