import { useState } from 'react';
import type { NextPage } from 'next'
import { Caption, LeadParagraph, Table, Tabs, Tag } from 'govuk-react'

const Dbs2: NextPage = () => {
  const [activeTab, setActiveTab] = useState<string>('Details');

  return (
    <>
      <Caption>
        Individual: Jane Thomas<br />
        Individual ID: 1234234
      </Caption>
      <h1 className="govuk-heading-xl">DBS</h1>
      <LeadParagraph>
        <b>Person in charge:-<br />
        Last update date: 5 Sep 2022</b>
        <span className='tag-wrapper'>
          <Tag tint="GREEN">
            Suitable
          </Tag>
        </span>
      </LeadParagraph>
      <Tabs>
        <Tabs.List>
          <Tabs.Tab href="#Details" onClick={(e) => {e.preventDefault(); setActiveTab('Details');}} selected={activeTab === 'Details'}>Details</Tabs.Tab>
          <Tabs.Tab href="#Comments" onClick={(e) => {e.preventDefault(); setActiveTab('Comments');}} selected={activeTab === 'Comments'}>Comments</Tabs.Tab>
          <Tabs.Tab href="#Timeline" onClick={(e) => {e.preventDefault(); setActiveTab('Timeline');}} selected={activeTab === 'Timeline'}>Timeline</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="Details" selected={activeTab === 'Details'}>
          <h2 className="govuk-heading-l">Details</h2>
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
        </Tabs.Panel>
        <Tabs.Panel id="Comments" selected={activeTab === 'Comments'}>
          <h2 className="govuk-heading-l">Comments</h2>
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
        </Tabs.Panel>
        <Tabs.Panel id="Timeline" selected={activeTab === 'Timeline'}>
          <h2 className="govuk-heading-l">Timeline</h2>
          <ol className='timeline'>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Application received <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Checks requested <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Awaiting checks <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Social service check received <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Concern identified <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Escalated to region <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Concern assigned to xxx <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">XXX reviewed case <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
            </li>
            <li className='timeline_item'>
              <h3 className="govuk-heading-s">Marked check as cleared <span className="govuk-caption-m timeline_item_caption">by xxxxx</span></h3>
              <span className="govuk-caption-m">Day Month Year at hrs:mins</span>
              <p><a className='govuk-link' href='#'>View the concern case</a></p>
            </li>
          </ol>
        </Tabs.Panel>
      </Tabs>
    </>
  )
};

export default Dbs2