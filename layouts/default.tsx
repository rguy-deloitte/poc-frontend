import { Breadcrumbs, Footer, Page, PhaseBanner } from 'govuk-react'
import Link from 'next/link';

interface DefaultLayoutProps {
  children: React.ReactNode,
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Page beforeChildren={
        <>
          <PhaseBanner level="alpha">
            This is a new service – your <Link href="#">feedback</Link> will help us to improve it.
          </PhaseBanner>
          <Breadcrumbs>
            <Breadcrumbs.Link href="/">Home</Breadcrumbs.Link>
            <Breadcrumbs.Link href="/">Team tasks</Breadcrumbs.Link>
            <Breadcrumbs.Link href="/">PRRA/ASA decision task list</Breadcrumbs.Link>
            PRRA
          </Breadcrumbs>
        </>
      }>
        {children}
      </Page>
      <Footer />
    </>
  )
}