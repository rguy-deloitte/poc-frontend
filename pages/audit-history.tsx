import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Button, Fieldset, H3, Heading, Link as LinkGds, LoadingBox, Paragraph, Table } from 'govuk-react'
import type { Log } from '../types/log';


const ActivityLog: NextPage = (props: any) => {
  const [type, setType] = useState<string>();
  const [description, setDescription] = useState<string>();

  const typeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const descriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const add = () => {
    if ((type && type.length > 0) && (description && description.length > 0)) {
      props.addLogs([
        {
          dateTime: new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'}),
          type,
          description,
        }
      ]);

      setType(undefined);
      setDescription(undefined);
    }
  }

  const tableRows = props.logs.map((log: Log, index: number) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>
          {log.dateTime}
        </Table.Cell>
        <Table.Cell>
          {log.type}
        </Table.Cell>
        <Table.Cell>
          {log.description}
        </Table.Cell>
      </Table.Row>
    )
  });

  return (
    <>
      <Heading>
        Audit history
      </Heading>
      <div className=' govuk-!-margin-bottom-8'>
        {tableRows.length === 0 &&
          <Paragraph>No activity to display</Paragraph>
        }
        {tableRows.length > 0 &&
          <Table head={
            <Table.Row>
              <Table.CellHeader>
                Date/time
              </Table.CellHeader>
              <Table.CellHeader>
                Type
              </Table.CellHeader>
              <Table.CellHeader>
                Description
              </Table.CellHeader>
            </Table.Row>
          }>
            {tableRows}
          </Table>
        }
      </div>
      <fieldset className="govuk-fieldset">
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
          <h2 className="govuk-fieldset__heading">
            Add event
          </h2>
        </legend>
        <div className="govuk-grid-row govuk-!-margin-bottom-4">
          <div className="govuk-grid-column-one-third">
            <label className="govuk-label" htmlFor="type">
              Type
            </label>
            <input className="govuk-input" id="type" name="type" type="text" onChange={typeChange} value={type ? type : ''} />
          </div>
          <div className="govuk-grid-column-two-thirds">
            <label className="govuk-label" htmlFor="description">
              Description
            </label>
            <input className="govuk-input" id="description" name="description" type="text" onChange={descriptionChange} value={description ? description : ''} />
          </div>
        </div>
        <Button onClick={add}>Add</Button>
      </fieldset>
    </>
  )
}

export default ActivityLog
