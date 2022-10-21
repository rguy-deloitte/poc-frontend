import { Breadcrumbs, Footer, Page, PhaseBanner } from 'govuk-react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import data from '../../data/search.json';
import type { Provider } from '../../types/provider';

interface DefaultLayoutProps {
  children: React.ReactNode,
}

export default function PageLayout({ children }: DefaultLayoutProps) {
  const router = useRouter();
  const { providerId } = router.query;
  const provider: Provider | undefined = data.providers.find((providerItem: Provider) => {
    if (providerItem.id === providerId) {
      return providerItem;
    }
  });

  return (
    <>
      <Page beforeChildren={
        <>
          <PhaseBanner level="alpha">
            This is a new service – your <Link href="#">feedback</Link> will help us to improve it.
          </PhaseBanner>
          {(router.route.includes('/provider/') && !router.route.includes('/individual') && !router.route.includes('/dbs')) &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              <Link href="/search" passHref><a className="govuk-link">Search</a></Link>
              {provider ? provider.providerName : 'Provider'}
            </Breadcrumbs>
          }
          {router.route.includes('/individual') &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              <Link href="/search" passHref><a className="govuk-link">Search</a></Link>
              <Link href={`/provider/${provider ? provider.id : ''}`} passHref><a className="govuk-link">{provider ? provider.providerName : 'Provider'}</a></Link>
              Jane Thomas
            </Breadcrumbs>
          }
          {(router.route.includes('/provider') && router.route.includes('/dbs')) &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              <Link href="/search" passHref><a className="govuk-link">Search</a></Link>
              <Link href={`/provider/${provider ? provider.id : ''}`} passHref><a className="govuk-link">{provider ? provider.providerName : 'Provider'}</a></Link>
              <Link href={`/provider/${provider ? provider.id : ''}/individual`} passHref><a className="govuk-link">Jane Thomas</a></Link>
              DBS
            </Breadcrumbs>
          }
          {router.route === '/audit-history' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              Audit history
            </Breadcrumbs>
          }
          {router.route === '/calendar' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              Calendar
            </Breadcrumbs>
          }
          {router.route === '/dashboard' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              Dashboard
            </Breadcrumbs>
          }
          {router.route === '/personal-tasks' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              Personal tasks
            </Breadcrumbs>
          }
          {router.route === '/search' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              Search
            </Breadcrumbs>
          }
          {router.route === '/team-tasks' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              Team tasks
            </Breadcrumbs>
          }
          {router.route === '/team-tasks/prra-asa-decision-task-list' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              <Link href="/team-tasks" passHref><a className="govuk-link">Team tasks</a></Link>
              PRRA/ASA decision task list
            </Breadcrumbs>
          }
          {router.route === '/team-tasks/prra-asa-decision-task-list/prra' &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              <Link href="/team-tasks" passHref><a className="govuk-link">Team tasks</a></Link>
              <Link href="/team-tasks/prra-asa-decision-task-list" passHref><a className="govuk-link">PRRA/ASA decision task list</a></Link>
              PRRA
            </Breadcrumbs>
          }
          {(router.route === '/team-tasks/prra-asa-decision-task-list/prra/application-summary' || router.route === '/team-tasks/prra-asa-decision-task-list/prra/application-summary-2') &&
            <Breadcrumbs>
              <Link href="/" passHref><a className="govuk-link">Home</a></Link>
              <Link href="/team-tasks" passHref><a className="govuk-link">Team tasks</a></Link>
              <Link href="/team-tasks/prra-asa-decision-task-list" passHref><a className="govuk-link">PRRA/ASA decision task list</a></Link>
              <Link href="/team-tasks/prra-asa-decision-task-list/prra" passHref><a className="govuk-link">PRRA</a></Link>
              Application summary
            </Breadcrumbs>
          }
        </>
      }>
        {children}
      </Page>
      <Footer />
    </>
  )
}