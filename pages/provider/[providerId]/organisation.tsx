import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Details, LeadParagraph, SectionBreak, Table } from 'govuk-react'
import data from '../../../data/search.json';
import type { Provider } from '../../../types/provider';
import Link from 'next/link';

const ProviderChain: NextPage = () => {
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
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl" id="ProviderDetails">Acme Education Group Limited</h1>
          <h2 className='govuk-heading-s govuk-!-margin-bottom-2'>Contents</h2>
          <ul className="govuk-list">
            <li>
              <a className="govuk-link govuk-link--no-visited-state" href="#OrganisationDetails" onClick={(e) => {e.preventDefault(); scrollTo('OrganisationDetails');}}>Organisation details</a>
            </li>
            <li>
              <a className="govuk-link govuk-link--no-visited-state" href="#InspectorDetails" onClick={(e) => {e.preventDefault(); scrollTo('AssociatedIndividuals');}}>Associated individuals</a>
            </li>
            <li>
              <a className="govuk-link govuk-link--no-visited-state" href="#AssociatedIndividuals" onClick={(e) => {e.preventDefault(); scrollTo('Providers');}}>Providers</a>
            </li>
          </ul>
          <SectionBreak level='LARGE' visible></SectionBreak>
          <h2 className="govuk-heading-l" id="OrganisationDetails">Organisation details</h2>
          <Table>
            <Table.Row>
              <Table.CellHeader>ID</Table.CellHeader>
              <Table.Cell>{provider.providerNumber}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Address</Table.CellHeader>
              <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Telephone</Table.CellHeader>
              <Table.Cell>{provider.mainPhone}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Email</Table.CellHeader>
              <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Warnings</Table.CellHeader>
              <Table.Cell>None</Table.Cell>
            </Table.Row>
          </Table>
        </div>
      </div>
      <h2 className="govuk-heading-l" id="AssociatedIndividuals">Associated individuals</h2>
      <h3 className="govuk-heading-m">Active</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Name</Table.CellHeader>
          <Table.CellHeader>Role</Table.CellHeader>
          <Table.CellHeader>Telephone</Table.CellHeader>
          <Table.CellHeader>Email</Table.CellHeader>
          <Table.CellHeader>Warnings</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table>

      <h2 className="govuk-heading-l" id="WorkflowItems">Providers</h2>
      <Table head={
          <Table.Row>
            <Table.CellHeader>Number</Table.CellHeader>
            <Table.CellHeader>Name</Table.CellHeader>
            <Table.CellHeader>Type</Table.CellHeader>
            <Table.CellHeader>Region</Table.CellHeader>
          </Table.Row>
        }>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Number]</a></Table.Cell>
            <Table.Cell>[Name]</Table.Cell>
            <Table.Cell>[Type]</Table.Cell>
            <Table.Cell>[Region]</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Number]</a></Table.Cell>
            <Table.Cell>[Name]</Table.Cell>
            <Table.Cell>[Type]</Table.Cell>
            <Table.Cell>[Region]</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Number]</a></Table.Cell>
            <Table.Cell>[Name]</Table.Cell>
            <Table.Cell>[Type]</Table.Cell>
            <Table.Cell>[Region]</Table.Cell>
          </Table.Row>
        </Table>
    </>
  )
}

export default ProviderChain
