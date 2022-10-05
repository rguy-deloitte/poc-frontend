import type { NextPage } from 'next'
import { Heading } from 'govuk-react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Heading>
        POC Frontend
      </Heading>
      <Link href="/team-tasks/prra-asa-decision-task-list/prra">PRRA</Link>
    </>
  )
}

export default Home
