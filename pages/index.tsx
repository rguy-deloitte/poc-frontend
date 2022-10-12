import type { NextPage } from 'next'
import { Heading } from 'govuk-react'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Heading>
        POC Frontend
      </Heading>
      <ul className="govuk-list">
        <li>
          <Link href="/team-tasks" passHref><a className="govuk-link">Team tasks</a></Link>
          <ul className="govuk-list govuk-list--bullet">
            <li>
              <Link href="/team-tasks/prra-asa-decision-task-list" passHref><a className="govuk-link">Task list</a></Link>
            </li>
            <li>
              <Link href="/team-tasks/prra-asa-decision-task-list/prra" passHref><a className="govuk-link">PRRA</a></Link>
            </li>
            <li>
              <Link href="/team-tasks/prra-asa-decision-task-list/prra/application-summary" passHref><a className="govuk-link">Application Summary - Option 1</a></Link>
            </li>
            <li>
              <Link href="/team-tasks/prra-asa-decision-task-list/prra/application-summary-2" passHref><a className="govuk-link">Application Summary - Option 2</a></Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/personal-tasks" passHref><a className="govuk-link">Personal tasks</a></Link>
        </li>
        <li>
          <Link href="/search" passHref><a className="govuk-link">Search</a></Link>
        </li>
        <li>
          <Link href="/calendar" passHref><a className="govuk-link">Calendar</a></Link>
        </li>
      </ul>
    </>
  )
}

export default Home
