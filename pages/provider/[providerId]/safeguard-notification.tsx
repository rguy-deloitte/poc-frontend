import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Details, LeadParagraph, SectionBreak, Table } from 'govuk-react'
import data from '../../../data/search.json';
import type { Provider } from '../../../types/provider';
import Link from 'next/link';

const WorkflowItem: NextPage = () => {
  const router = useRouter();
  const { providerId } = router.query;
  const provider: Provider | undefined = data.providers.find((providerItem: Provider) => {
    if (providerItem.id === providerId) {
      return providerItem;
    }
  });

  const scrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  if (!provider) {
    return (
      <h1 className="govuk-heading-xl">
        Provider not found
      </h1>
    )
  }

  return (
    <>
      <h1 className="govuk-heading-xl govuk-!-margin-bottom-2" id="ProviderDetails">Safeguard notification</h1>
      <LeadParagraph>
        <b>
          Provider: {provider.providerName}<br />
          URN: {provider.providerNumber} RP: [number]<br />
          Date in: [date]<br />
          Date out: [date]
        </b>
      </LeadParagraph>
      <h2 className='govuk-heading-s govuk-!-margin-bottom-2'>Contents</h2>
      <ul className="govuk-list">
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#ReasonForNotification" onClick={(e) => {e.preventDefault(); scrollTo('ReasonForNotification');}}>Reason for notification</a>
        </li>
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#Documents" onClick={(e) => {e.preventDefault(); scrollTo('Documents');}}>Documents</a>
        </li>
      </ul>
      <SectionBreak level='LARGE' visible></SectionBreak>
      <h2 className="govuk-heading-l" id="ReasonForNotification">Reason for notification</h2>
      <Table>
        <Table.Row>
          <Table.CellHeader>Provider type</Table.CellHeader>
          <Table.Cell>{provider.providerType}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Regulation number</Table.CellHeader>
          <Table.Cell>44</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Date of visit</Table.CellHeader>
          <Table.Cell>[Date]</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Visit completed by</Table.CellHeader>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
        </Table.Row>
      </Table>
      <h2 className="govuk-heading-l" id="Documents">Documents</h2>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Document name</Table.CellHeader>
          <Table.CellHeader>Uploaded by</Table.CellHeader>
          <Table.CellHeader>Uploaded date</Table.CellHeader>
          <Table.CellHeader></Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell>[Document name]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='/dummy.pdf' target="_blank">Open</a> | <a className='govuk-link' href='/dummy.pdf' download>Download</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>[Document name]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='/dummy.pdf' target="_blank">Open</a> | <a className='govuk-link' href='/dummy.pdf' download>Download</a></Table.Cell>
        </Table.Row>
      </Table>
      <fieldset className="govuk-fieldset govuk-!-margin-top-8">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
          <h3 className="govuk-heading-m">
            Upload a document
          </h3>
        </legend>
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="file-upload-1">
            Select a file to upload
          </label>
          <input className="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file" />
        </div>
        <div className="govuk-form-group">
          <button className="govuk-button" data-module="govuk-button">Upload document</button>
        </div>
      </fieldset>
    </>
  )
}

export default WorkflowItem
