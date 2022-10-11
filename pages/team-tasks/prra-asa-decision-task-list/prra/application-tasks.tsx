import type { NextPage } from 'next'
import { Caption, GridCol, GridRow, H1, H2, H3, LeadParagraph, Link, Paragraph, Table, Tag } from 'govuk-react'

const ApplicationTasks: NextPage = () => {
  return (
    <>
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
            Application tasks
          </H2>
          <ol className="app-task-list">
        <li>
          <h2 className="app-task-list__section">
            <span className="app-task-list__section-number">1. </span> Stage 1
          </h2>
          <ul className="app-task-list__items">
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                <Link href='#'>[task]</Link>
              </span>
              <strong className="govuk-tag app-task-list__tag">Completed</strong>
            </li>
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                <Link href='#'>[task]</Link>
              </span>
              <strong className="govuk-tag app-task-list__tag">Completed</strong>
            </li>
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                <Link href='#'>[task]</Link>
              </span>
              <strong className="govuk-tag app-task-list__tag">Completed</strong>
            </li>
          </ul>
        </li>

        <li>
          <h2 className="app-task-list__section">
            <span className="app-task-list__section-number">2. </span> Stage 2
          </h2>
          <ul className="app-task-list__items">
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                <Link href='#'>[task]</Link>
              </span>
              <strong className="govuk-tag app-task-list__tag">Completed</strong>
            </li>
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                <Link href='#'>[task]</Link>
              </span>
              <strong className="govuk-tag app-task-list__tag">Completed</strong>
            </li>
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                <Link href='#'>[task]</Link>
              </span>
              <strong className="govuk-tag app-task-list__tag">Completed</strong>
            </li>
          </ul>
        </li>

        <li>
          <h2 className="app-task-list__section">
            <span className="app-task-list__section-number">3. </span> Stage 3
          </h2>
          <ul className="app-task-list__items">
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                <Link href='#'>PRRA/ASA Decision</Link>
              </span>
              <strong className="govuk-tag govuk-tag--blue app-task-list__tag">In progress</strong>
            </li>
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                Registration Visit
              </span>
              <strong className="govuk-tag govuk-tag--grey app-task-list__tag">Not started</strong>
            </li>
            <li className="app-task-list__item">
              <span className="app-task-list__task-name">
                Decision
              </span>
              <strong className="govuk-tag govuk-tag--grey app-task-list__tag">Not started</strong>
            </li>
          </ul>
        </li>
      </ol>
        </GridCol>
        <GridCol setWidth="one-third">
          <H2>
            Links
          </H2>
          <Paragraph supportingText>
            [Link 1](#)
          </Paragraph>
          <Paragraph supportingText>
            [Link 2](#)
          </Paragraph>
        </GridCol>
      </GridRow>
    </>
  )
};

export default ApplicationTasks