import type { NextPage } from 'next'
import { Caption, GridCol, GridRow, H1, H2, H3, LeadParagraph, Link, Paragraph, Table, Tag } from 'govuk-react'

const ApplicationTimeline: NextPage = () => {
  return (
    <>
      <H1>Application Timeline</H1>
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
          <ol className='timeline'>
            <li className='timeline_item'>
              <H3>Application received <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>Checks requested <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>Awaiting checks <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>Social service check received <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>Concern identified <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>Escalated to region <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>Concern assigned to xxx <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>XXX reviewed case <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <H3>Marked check as cleared <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></H3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
              <p><a className='govuk-link' href='#'>View the concern case</a></p>
            </li>
          </ol>
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
        </GridCol>
      </GridRow>
    </>
  )
};

export default ApplicationTimeline