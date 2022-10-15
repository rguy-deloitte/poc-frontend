import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Fieldset, H3, Heading, Link as LinkGds, LoadingBox, Paragraph, Table } from 'govuk-react'
import type { Log } from '../types/log';


const ActivityLog: NextPage = (props: any) => {
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
        Activity log
      </Heading>
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
    </>
  )
}

export default ActivityLog
