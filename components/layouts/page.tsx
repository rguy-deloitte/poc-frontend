import { Breadcrumbs, Footer, Page, PhaseBanner } from 'govuk-react'
import { useRouter } from 'next/router';
import Link from 'next/link';

interface DefaultLayoutProps {
  children: React.ReactNode,
}

export default function PageLayout({ children }: DefaultLayoutProps) {
  const router = useRouter();
  
  return (
    <>
      <Page beforeChildren={
        <>
          <PhaseBanner level="alpha">
            This is a new service – your <Link href="#">feedback</Link> will help us to improve it.
          </PhaseBanner>
          {router.route === '/team-tasks/prra-asa-decision-task-list/prra' &&
            <Breadcrumbs>
              <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
              <Breadcrumbs.Link href="/">Team tasks</Breadcrumbs.Link>
              <Breadcrumbs.Link href="/">PRRA/ASA decision task list</Breadcrumbs.Link>
              PRRA
            </Breadcrumbs>
          }
          {router.route === '/team-tasks/prra-asa-decision-task-list/prra/application-summary' &&
            <Breadcrumbs>
              <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
              <Breadcrumbs.Link href="/">Team tasks</Breadcrumbs.Link>
              <Breadcrumbs.Link href="/">PRRA/ASA decision task list</Breadcrumbs.Link>
              <Breadcrumbs.Link href="/team-tasks/prra-asa-decision-task-list/prra">PRRA</Breadcrumbs.Link>
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