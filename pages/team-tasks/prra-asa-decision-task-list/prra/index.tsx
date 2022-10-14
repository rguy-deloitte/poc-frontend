import { useRef, useState } from 'react';
import type { NextPage } from 'next'
import { Button, Caption, GridCol, GridRow, H2, H3, Heading, LabelText, LeadParagraph, Link as LinkGds, LoadingBox, Paragraph, Table, Tag } from 'govuk-react'
import PrraForm from '../../../../components/forms/prra/prraForm';
import Link from 'next/link';
import type { PrraTask } from '../../../../types/prraTask';
import type { DecisionTask } from '../../../../types/decisionTask';
import Router from 'next/router';

const Prra: NextPage = (props: any) => {
  const [formData, setFormData] = useState<PrraTask>({});
  const [readonly, setReadonly] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const scrollRef = useRef<null | HTMLDivElement>(null);

  const applicationId: number = Router.query.applicationId ? parseInt(Router.query.applicationId.toString()) : props.taskData[0].applicationId;
  const decisionTask: DecisionTask = props.taskData.find((task: DecisionTask) => task.applicationId === applicationId);

  const saveData = (dataToSave: PrraTask) => {
    setLoading(true);

    fetch('/api/prra-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...dataToSave, submitted: false}),
    })
    .then((response: any) => {
      if (response.status === 200) {
        setReadonly(true);
        setFormData(dataToSave);
        setLoading(false);
        window.scrollTo(0, 0);
      }
    });
  };

  const submit = () => {
    setLoading(true);

    fetch('/api/prra-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...formData, submitted: true}),
    })
    .then((response: any) => {
      if (response.status === 200) {
        props.startTask(applicationId);
        Router.push('/team-tasks/prra-asa-decision-task-list');
      }
    });
  }

  const edit = () => {
    setReadonly(false);
    scrollRef.current?.scrollIntoView();
  }

  return (
    <>
      <Caption>
        Provider: {decisionTask.provider}<br />
        URN: 1234237
      </Caption>
      <Heading>
        {decisionTask.taskType}
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
                {decisionTask.type}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Register
              </Table.CellHeader>
              <Table.Cell>
                {decisionTask.register.join(', ')}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>
                Responsible body
              </Table.CellHeader>
              <Table.Cell>
                {decisionTask.provider}
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
          <div ref={scrollRef} />
          <LoadingBox loading={loading}>
            {!readonly &&
              <>
                <H2>
                  Before you start
                </H2>
                <Paragraph>
                  Please complete the sections below to detail the outcome of your investigation into the application to register. Once all relevant parts are completed, please click 'Save' at the bottom.
                </Paragraph>
                <PrraForm initialData={formData} saveForm={saveData} />
              </>
            }
            {readonly &&
              <>
                <H2>
                  Linked proforma
                </H2>
                <Table>
                  <Table.Row>
                    <Table.CellHeader>
                      Linked proforma document
                    </Table.CellHeader>
                    <Table.Cell>
                      {formData.linkedProforma}
                    </Table.Cell>
                  </Table.Row>
                </Table>
                <H2>
                  Visit decision
                </H2>
                <Table>
                  <Table.Row>
                    <Table.CellHeader>
                      Visit decision
                    </Table.CellHeader>
                    <Table.Cell>
                      {formData.visitDecision}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell colSpan={2}>
                      <LabelText><b>Reason for decision</b></LabelText>
                      <details className="govuk-details" data-module="govuk-details" open>
                        <summary className="govuk-details__summary">
                          <span className="govuk-details__summary-text govuk-details__summary-text--show-hide"></span>
                        </summary>
                        <div className="govuk-details__text govuk-details__text--no-border show-line-breaks">
                          {formData.visitDecisionReason}
                        </div>
                      </details>
                    </Table.Cell>
                  </Table.Row>
                </Table>
                <H2>
                  Action plan
                </H2>
                <Table>
                  <Table.Row>
                    <Table.Cell>
                      <LabelText><b>Background information</b></LabelText>
                      <details className="govuk-details" data-module="govuk-details" open>
                        <summary className="govuk-details__summary">
                          <span className="govuk-details__summary-text govuk-details__summary-text--show-hide"></span>
                        </summary>
                        <div className="govuk-details__text govuk-details__text--no-border show-line-breaks">
                          {formData.backgroundInformation}
                        </div>
                      </details>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <LabelText><b>Lines of enquiry</b></LabelText>
                      <details className="govuk-details" data-module="govuk-details" open>
                        <summary className="govuk-details__summary">
                          <span className="govuk-details__summary-text govuk-details__summary-text--show-hide"></span>
                        </summary>
                        <div className="govuk-details__text govuk-details__text--no-border show-line-breaks">
                          {formData.linesOfEnquiry}
                        </div>
                      </details>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <LabelText><b>CFC details</b></LabelText>
                      <details className="govuk-details" data-module="govuk-details" open>
                        <summary className="govuk-details__summary">
                          <span className="govuk-details__summary-text govuk-details__summary-text--show-hide"></span>
                        </summary>
                        <div className="govuk-details__text govuk-details__text--no-border show-line-breaks">
                          {formData.cfcDetails}
                        </div>
                      </details>
                    </Table.Cell>
                  </Table.Row>
                </Table>
                {formData.isOrganisation &&
                  <>
                  <H3>
                    Organisation details
                  </H3>
                    <Table>
                      <Table.Row>
                        <Table.CellHeader>
                          Nature of business
                        </Table.CellHeader>
                        <Table.Cell>
                          {formData.natureOfBusiness}
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.CellHeader>
                          Company status
                        </Table.CellHeader>
                        <Table.Cell>
                          {formData.companyStatus}
                        </Table.Cell>
                      </Table.Row>
                    </Table>
                  </>
                }
                <Button onClick={submit}>
                  Submit
                </Button>
                <button className='govuk-button govuk-button--secondary' onClick={edit}>
                  Edit
                </button>
              </>
            }
          </LoadingBox>
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
            <Link href="/team-tasks/prra-asa-decision-task-list/prra/application-summary" passHref><a className="govuk-link">Application summary</a></Link>
          </p>
          <p>
            <Link href="/team-tasks/prra-asa-decision-task-list/prra/application-summary-2" passHref><a className="govuk-link">Application summary (option 2)</a></Link>
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
