import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { LeadParagraph, SectionBreak, Table } from 'govuk-react'
import Link from 'next/link';

const Individual: NextPage = () => {
  const router = useRouter();
  const { providerId } = router.query;

  const scrollTo = (elementId: string) => {
    document.getElementById(elementId)?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  return (
    <>
    <h1 className="govuk-heading-xl govuk-!-margin-bottom-2" id="ProviderDetails">Jane Thomas</h1>
      <LeadParagraph>
        <b>
          ID: [number]<br />
          Date of birth: [date]<br />
          Last updated: [date]
        </b>
      </LeadParagraph>
      <h2 className='govuk-heading-s govuk-!-margin-bottom-2'>Contents</h2>
      <ul className="govuk-list">
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#IndividualDetails" onClick={(e) => {e.preventDefault(); scrollTo('IndividualDetails');}}>Individual details</a>
        </li>
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#PreviousDetails" onClick={(e) => {e.preventDefault(); scrollTo('PreviousDetails');}}>Previous details</a>
        </li>
        <li>
          <a className="govuk-link govuk-link--no-visited-state" href="#Roles" onClick={(e) => {e.preventDefault(); scrollTo('Roles');}}>Roles</a>
        </li>
      </ul>
      <SectionBreak level='LARGE' visible></SectionBreak>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h2 className="govuk-heading-l" id="IndividualDetails">Individual details</h2>
          <Table>
            <Table.Row>
              <Table.CellHeader>Home address</Table.CellHeader>
              <Table.Cell>[Address line 1]<br />[Address line 2]<br />[City] [Postcode]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Work address</Table.CellHeader>
              <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Telephone</Table.CellHeader>
              <Table.Cell>[Telephone number]</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.CellHeader>Email</Table.CellHeader>
              <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
            </Table.Row>
          </Table>
        </div>
        <div className="govuk-grid-column-one-third">
          <h2 className="govuk-heading-m govuk-!-margin-top-2" id="PreviousDetails">Registration checks</h2>
          <ul className="govuk-list">
            <li className='split'>
              <a className="govuk-link" href="#">Check summary</a>
            </li>
            <li className='split'>
              <Link href={`/provider/${providerId}/dbs`} passHref><a className='govuk-link'>DBS check</a></Link>
              <span className='govuk-hint govuk-!-font-size-14 govuk-!-margin-bottom-0'>24 Apr 2021</span>
            </li>
            <li className='split'>
              <a className="govuk-link" href="#">Local authority check</a>
              <span className='govuk-hint govuk-!-font-size-14 govuk-!-margin-bottom-0'>24 Apr 2021</span>
            </li>
            <li className='split'>
              <a className="govuk-link" href="#">Reference check</a>
              <span className='govuk-hint govuk-!-font-size-14 govuk-!-margin-bottom-0'>06 Jul 2021</span>
            </li>
            <li className='split'>
              <a className="govuk-link" href="#">Health declaration</a>
              <span className='govuk-hint govuk-!-font-size-14 govuk-!-margin-bottom-0'>03 May 2020</span>
            </li>
            <li className='split'>
              <a className="govuk-link" href="#">Other checks</a>
              <span className='govuk-hint govuk-!-font-size-14 govuk-!-margin-bottom-0'>29 Jan 2020</span>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="govuk-heading-l" id="PreviousDetails">Previous details</h2>
      <h3 className="govuk-heading-m">Previous names</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Forenames</Table.CellHeader>
          <Table.CellHeader>Surname</Table.CellHeader>
          <Table.CellHeader>Date from</Table.CellHeader>
          <Table.CellHeader>Date to</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell>[First name] [Middle name]</Table.Cell>
          <Table.Cell>[Surname]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>[First name] [Middle name]</Table.Cell>
          <Table.Cell>[Surname]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
        </Table.Row>
      </Table>
      <h3 className="govuk-heading-m">Previous addresses</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Address</Table.CellHeader>
          <Table.CellHeader>Local authority</Table.CellHeader>
          <Table.CellHeader>Date from</Table.CellHeader>
          <Table.CellHeader>Date to</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Local authority]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Local authority]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
          <Table.Cell>[Date]</Table.Cell>
        </Table.Row>
      </Table>
      <h2 className="govuk-heading-l" id="Roles">Roles</h2>
      <h3 className="govuk-heading-m">Active</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Provider</Table.CellHeader>
          <Table.CellHeader>Role</Table.CellHeader>
          <Table.CellHeader>Address</Table.CellHeader>
          <Table.CellHeader>Telephone</Table.CellHeader>
          <Table.CellHeader>Email</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
      </Table>
      <h3 className="govuk-heading-m">Application in progress</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Provider</Table.CellHeader>
          <Table.CellHeader>Role</Table.CellHeader>
          <Table.CellHeader>Address</Table.CellHeader>
          <Table.CellHeader>Telephone</Table.CellHeader>
          <Table.CellHeader>Email</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
      </Table>
      <h3 className="govuk-heading-m">Withdrawn</h3>
      <Table head={
        <Table.Row>
          <Table.CellHeader>Provider</Table.CellHeader>
          <Table.CellHeader>Role</Table.CellHeader>
          <Table.CellHeader>Address</Table.CellHeader>
          <Table.CellHeader>Telephone</Table.CellHeader>
          <Table.CellHeader>Email</Table.CellHeader>
        </Table.Row>
      }>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a className='govuk-link' href='#'>[Name]</a></Table.Cell>
          <Table.Cell>[Role]</Table.Cell>
          <Table.Cell>[Address line 1],<br />[Address line 2],<br />[City] [Postcode]</Table.Cell>
          <Table.Cell>[Telephone number]</Table.Cell>
          <Table.Cell><a className='govuk-link' href='#'>[Email address]</a></Table.Cell>
        </Table.Row>
      </Table>
    </>
  )
}

export default Individual
