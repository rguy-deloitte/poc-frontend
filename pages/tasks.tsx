import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Button, Tag } from 'govuk-react'

const Tasks: NextPage = (props: any) => {
  const [workflowItems, setWorkflowItems] = useState<any[]>([]);
  const [connectionError, setConnectionError] = useState<boolean>(false);

  useEffect(() => {
    getWorkflows();
  }, []);

  const startWorkflow = () => {
    fetch('http://localhost:13000/workflows/parent')
      .then(() => getWorkflows())
      .catch((error) => setConnectionError(true));
  };

  const getWorkflows = () => {
    setConnectionError(false);

    fetch('http://localhost:13000/v1/workflow-instances')
      .then((response) => response.json())
      .then((data) => setWorkflowItems(data.items))
      .catch((error) => setConnectionError(true));
  }

  const completeTask = (taskID: string, id: string) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workflowInstanceId: id })
    };
    fetch(`http://localhost:13000/v1/signals/resume-${taskID}/execute`, requestOptions)
      .then(() => getWorkflows())
      .catch((error) => setConnectionError(true));
  }

  return (
    <>
      <h1 className="govuk-heading-xl">Workflow</h1>
      {connectionError &&
        <div className="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" data-module="govuk-error-summary">
          <h2 className="govuk-error-summary__title" id="error-summary-title">
            There is a problem
          </h2>
          <div className="govuk-error-summary__body">
            We cannot connect to the workflow database at this time.
          </div>
        </div>
      }
      {!connectionError &&
        <>
          {workflowItems.length === 0 &&
            <>
              <p className='govuk-body govuk-!-font-size-24'>There are no workflow tasks in progress</p>
              <Button onClick={startWorkflow}>Start workflow</Button>
            </>
          }

          {workflowItems.length > 0 &&
            <>
              <div className='split'>
                <h2 className='govuk-heading-l'>Parent workflow</h2>
                <Tag tint={workflowItems[0].workflowStatus === 'Finished' ? 'GREEN' : 'SOLID'}>{workflowItems[0].workflowStatus}</Tag>
              </div>
              <table className="govuk-table">
                <thead className="govuk-table__head">
                  <tr className="govuk-table__row">
                    <th scope="col" className="govuk-table__header">Task name</th>
                    <th scope="col" className="govuk-table__header">Status</th>
                    <th scope="col" className="govuk-table__header">Action</th>
                  </tr>
                </thead>
                <tbody className="govuk-table__body">
                  {workflowItems.map((workflowItem, index) => {
                    if (index === 0) {
                      return;
                    }

                    return (
                      <tr className="govuk-table__row" key={index}>
                        <td className="govuk-table__cell">Child task {index}</td>
                        <td className="govuk-table__cell"><Tag tint={workflowItem.workflowStatus === 'Suspended' ? 'BLUE' : 'GREEN'}>{workflowItem.workflowStatus}</Tag></td>
                        <td className="govuk-table__cell"><Button disabled={workflowItem.workflowStatus !== 'Suspended'} onClick={() => completeTask(index.toString(), workflowItem.id)}>Complete</Button></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </>
          }
        </>
      }
      <button className='govuk-button govuk-button--secondary' onClick={getWorkflows}>Refresh</button>
    </>
  )
}

export default Tasks