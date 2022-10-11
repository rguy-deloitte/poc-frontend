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
        <Link href="/team-tasks" passHref><a className="govuk-link">Team tasks</a></Link>
      </p>
      <p>
        <Link href="/team-tasks/prra-asa-decision-task-list" passHref><a className="govuk-link">Task list</a></Link>
      </p>
      <p>
        <Link href="/personal-tasks" passHref><a className="govuk-link">Personal tasks</a></Link>
      </p>
      <p>
        <Link href="/team-tasks/prra-asa-decision-task-list/prra" passHref><a className="govuk-link">PRRA</a></Link>
      </p>
    </>
  )
}

export default Home
