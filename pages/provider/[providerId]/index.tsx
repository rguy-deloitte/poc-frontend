import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Details, LeadParagraph, SectionBreak, Table } from 'govuk-react'
import data from '../../../data/search.json';
import type { Provider } from '../../../types/provider';
import Link from 'next/link';

const Provider: NextPage = () => {
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
      <h1 className="govuk-heading-xl govuk-!-margin-bottom-2" id="ProviderDetails">{provider.providerName}</h1>
      <LeadParagraph>
        <b>
          URN: {provider.providerNumber} RP: [number]<br />
          Active since: [date]<br />
          Last updated: [date]
        </b>
      </LeadParagraph>
      <h2 className='govuk-heading-s govuk-!-margin-bottom-2'>Contents</h2>
      <ul className="govuk-list">
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#ProviderDetails" onClick={(e) => {e.preventDefault(); scrollTo('ProviderDetails');}}>Provider details</a>
        </li>
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#InspectorDetails" onClick={(e) => {e.preventDefault(); scrollTo('InspectorDetails');}}>Inspector details</a>
        </li>
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#AssociatedIndividuals" onClick={(e) => {e.preventDefault(); scrollTo('AssociatedIndividuals');}}>Associated individuals</a>
        </li>
      </ul>
      <SectionBreak level='LARGE' visible></SectionBreak>
      <h2 className="govuk-heading-l" id="ProviderDetails">Provider details</h2>
      <Table>
        <Table.Row>
          <Table.CellHeader>Organisation</Table.CellHeader>
          <Table.Cell>[Organisation name]</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>ID</Table.CellHeader>
          <Table.Cell>{provider.providerNumber}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Provider address</Table.CellHeader>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Region</Table.CellHeader>
          <Table.Cell>{provider.region}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Local authority</Table.CellHeader>
          <Table.Cell>[Local authority]</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Register</Table.CellHeader>
          <Table.Cell>[EYR/CCR/VCR]</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Provider type</Table.CellHeader>
          <Table.Cell>{provider.providerType}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Telephone</Table.CellHeader>
          <Table.Cell>{provider.mainPhone}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Email</Table.CellHeader>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
      </Table>
      <h2 className="govuk-heading-l" id="InspectorDetails">Inspector details</h2>
      <Table>
        <Table.Row>
          <Table.CellHeader>RIM</Table.CellHeader>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>SCRI</Table.CellHeader>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
        </Table.Row>
      </Table>
      <h2 className="govuk-heading-l" id="AssociatedIndividuals">Associated individuals</h2>
      <h3 className="govuk-heading-m">Active</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Name</Table.CellHeader>
          <Table.CellHeader>Role</Table.CellHeader>
          <Table.CellHeader>Telephone</Table.CellHeader>
          <Table.CellHeader>Email</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell><Link href={`/provider/${providerId}/individual`} passHref><a className='govuk-link'>Jane Thomas</a></Link></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
      </Table>
      <h3 className="govuk-heading-m">Application in progress</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Name</Table.CellHeader>
          <Table.CellHeader>Role</Table.CellHeader>
          <Table.CellHeader>Telephone</Table.CellHeader>
          <Table.CellHeader>Email</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
      </Table>
      <h3 className="govuk-heading-m">Withdrawn</h3>
      <Details summary="View withdrawn associated individuals">
        <Table head={
          <Table.Row>
            <Table.CellHeader>Name</Table.CellHeader>
            <Table.CellHeader>Role</Table.CellHeader>
            <Table.CellHeader>Telephone</Table.CellHeader>
            <Table.CellHeader>Email</Table.CellHeader>
          </Table.Row>
        }>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
            <Table.Cell>[Role]</Table.Cell>
            <Table.Cell>[Telephone number]</Table.Cell>
            <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
            <Table.Cell>[Role]</Table.Cell>
            <Table.Cell>[Telephone number]</Table.Cell>
            <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
            <Table.Cell>[Role]</Table.Cell>
            <Table.Cell>[Telephone number]</Table.Cell>
            <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          </Table.Row>
        </Table>
      </Details>
      <h3 className="govuk-heading-m">Inactive</h3>
      <Details summary="View inactive associated individuals">
        <Table head={
          <Table.Row>
            <Table.CellHeader>Name</Table.CellHeader>
            <Table.CellHeader>Role</Table.CellHeader>
            <Table.CellHeader>Telephone</Table.CellHeader>
            <Table.CellHeader>Email</Table.CellHeader>
          </Table.Row>
        }>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
            <Table.Cell>[Role]</Table.Cell>
            <Table.Cell>[Telephone number]</Table.Cell>
            <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
            <Table.Cell>[Role]</Table.Cell>
            <Table.Cell>[Telephone number]</Table.Cell>
            <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
            <Table.Cell>[Role]</Table.Cell>
            <Table.Cell>[Telephone number]</Table.Cell>
            <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
          </Table.Row>
        </Table>
      </Details>
    </>
  )
}

export default Provider
