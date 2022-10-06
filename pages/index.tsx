import type { NextPage } from 'next'
import { Heading } from 'govuk-react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Heading>
        POC Frontend
      </Heading>
      <p>
        <Link href="/team-tasks">Team tasks</Link>
      </p>
      <p>
        <Link href="/team-tasks/prra-asa-decision-task-list">Task list</Link>
      </p>
      <p>
        <Link href="/team-tasks/prra-asa-decision-task-list/prra">PRRA</Link>
      </p>
    </>
  )
}

export default Home
