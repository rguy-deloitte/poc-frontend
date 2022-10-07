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
          {router.route === '/team-tasks' &&
            <Breadcrumbs>
              <Link href="/">Home</Link>
              Team tasks
            </Breadcrumbs>
          }
          {router.route === '/team-tasks/prra-asa-decision-task-list' &&
            <Breadcrumbs>
              <Link href="/">Home</Link>
              <Link href="/team-tasks">Team tasks</Link>
              PRRA/ASA decision task list
            </Breadcrumbs>
          }
          {router.route === '/team-tasks/prra-asa-decision-task-list/prra' &&
            <Breadcrumbs>
              <Link href="/">Home</Link>
              <Link href="/team-tasks">Team tasks</Link>
              <Link href="/team-tasks/prra-asa-decision-task-list">PRRA/ASA decision task list</Link>
              PRRA
            </Breadcrumbs>
          }
          {router.route === '/team-tasks/prra-asa-decision-task-list/prra/application-summary' &&
            <Breadcrumbs>
              <Link href="/">Home</Link>
              <Link href="/team-tasks">Team tasks</Link>
              <Link href="/team-tasks/prra-asa-decision-task-list">PRRA/ASA decision task list</Link>
              <Link href="/team-tasks/prra-asa-decision-task-list/prra">PRRA</Link>
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