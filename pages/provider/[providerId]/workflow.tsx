import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { Provider } from '../../../types/provider';
import searchData from '../../../data/search.json';
import { Fieldset, Table } from 'govuk-react';
import type { Workflow as WorkflowType } from '../../../types/workflow';
import workflowData from '../../../data/workflow.json'
import Link from 'next/link';

const Workflow: NextPage = (props: any) => {
  const router = useRouter();
  const { providerId } = router.query;
  const provider: Provider | undefined = searchData.providers.find((providerItem: Provider) => {
    if (providerItem.id === providerId) {
      return providerItem;
    }
  });
  const [tableData, setTableData] = useState<WorkflowType[]>(workflowData);
  const [showFilter, setShowFilter] = useState<boolean>(props.workflowFilterType.length > 0);

  const workflowTypes = [... new Set(workflowData.map(workflowItem => workflowItem.type))].sort();

  useEffect(() => {
    setTableData(workflowData.sort((a: any, b: any) => {
      if (a[props.workflowSortField] < b[props.workflowSortField]) return props.workflowSortDirection === 'asc' ? -1 : 1;
      if (a[props.workflowSortField] > b[props.workflowSortField]) return props.workflowSortDirection === 'asc' ? 1 : -1;
      return 0;
    })
    .filter((item: WorkflowType) => {
      if (props.workflowFilterType.length === 0) {
        return true;
      }

      return props.workflowFilterType.includes(item.type);
    }));
  }, [props.workflowFilterType, props.workflowSortField, props.workflowSortDirection]);

  const changeSort = (fieldId: string) => {
    if (props.workflowSortField === fieldId) {
      props.setWorkflowSortDirection(props.workflowSortDirection === 'asc' ? 'dsc' : 'asc');
    } else {
      props.setWorkflowSortField(fieldId);
      props.setWorkflowSortDirection('asc');
    }
  };

  const updateFilterType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      //setFilterType([...filterType, e.target.value]);
      props.setWorkflowFilterType([...props.workflowFilterType, e.target.value]);
    } else {
      //setFilterType(filterType.filter((item: string) => item !== e.target.value));
      props.setWorkflowFilterType(props.workflowFilterType.filter((item: string) => item !== e.target.value));
    }
  };

  const tableRows = tableData.map((workflowItem: WorkflowType, index: number) => {
    const dateIn = new Date(workflowItem.dateIn);
    const dateOut = new Date(workflowItem.dateOut);

    return (
      <Table.Row key={index}>
        <Table.Cell><Link href={`/provider/${providerId}/safeguard-notification`} passHref><a className='govuk-link'>[{workflowItem.name}]</a></Link></Table.Cell>
        <Table.Cell>{workflowItem.type}</Table.Cell>
        <Table.Cell>{dateIn.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}</Table.Cell>
        <Table.Cell>{dateOut.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}</Table.Cell>
      </Table.Row>
    )
  });

  const filters = workflowTypes.map((item: string, index: number) => {
    const matchCount = workflowData.filter((workflowItem: WorkflowType) => workflowItem.type === item).length;

    return (
      <div className="govuk-checkboxes__item">
        <input checked={props.workflowFilterType.includes(item)} className="govuk-checkboxes__input" disabled={matchCount === 0} id={`filterTypeCheckbox${index}`} key={index} onChange={updateFilterType} type="checkbox" value={item} />
        <label className="govuk-label govuk-checkboxes__label" htmlFor={`filterTypeCheckbox${index}`}>{item} ({matchCount})</label>
      </div>
    );
  });

  return (
    <>
      <h1 className="govuk-heading-xl govuk-!-margin-bottom-2" id="ProviderDetails">Workflow</h1>
      <button className='govuk-button govuk-button--secondary' onClick={() => {setShowFilter(!showFilter)}}>{showFilter ? 'Hide' : 'Show'} filter</button>
      {showFilter &&
        <div className='filter'>
          <h3 className='govuk-heading-m'>Filter by step type</h3>
          <Fieldset>
            <div className="govuk-checkboxes govuk-checkboxes--small">
              {filters}
            </div>
          </Fieldset>
        </div>
      }
      <div className='split'>
        <h2 className='govuk-heading-s'>Workflow items for {provider?.providerName}</h2>
        <span className='govuk-caption-m govuk-!-font-size-16'>Showing 28 results</span>
      </div>
      {tableRows.length > 0 &&
        <Table head={
            <Table.Row>
              <Table.CellHeader>
                <button className={`sortable ${props.workflowSortField === 'name' ? `sortable--${props.workflowSortDirection}` : ''}`} onClick={() => {changeSort('name')}}>Name</button>
              </Table.CellHeader>
              <Table.CellHeader>
                <button className={`sortable ${props.workflowSortField === 'type' ? `sortable--${props.workflowSortDirection}` : ''}`} onClick={() => {changeSort('type')}}>Step type</button>
              </Table.CellHeader>
              <Table.CellHeader>
                <button className={`sortable ${props.workflowSortField === 'dateIn' ? `sortable--${props.workflowSortDirection}` : ''}`} onClick={() => {changeSort('dateIn')}}>Date in</button>
              </Table.CellHeader>
              <Table.CellHeader>
                <button className={`sortable ${props.workflowSortField === 'dateOut' ? `sortable--${props.workflowSortDirection}` : ''}`} onClick={() => {changeSort('dateOut')}}>Date out</button>
              </Table.CellHeader>
            </Table.Row>
          }>
          {tableRows}
        </Table>
      }
      {tableRows.length > 9 &&
        <nav className="govuk-pagination" role="navigation" aria-label="results">
          <div className="govuk-pagination__prev">
          </div>
          <ul className="govuk-pagination__list">
            <li className="govuk-pagination__item govuk-pagination__item--current">
              <a className="govuk-link govuk-pagination__link" href="#" aria-label="Page 1" aria-current="page">
                1
              </a>
            </li>
            <li className="govuk-pagination__item">
              <a className="govuk-link govuk-pagination__link" href="#" aria-label="Page 2">
                2
              </a>
            </li>
            <li className="govuk-pagination__item">
              <a className="govuk-link govuk-pagination__link" href="#" aria-label="Page 3">
                3
              </a>
            </li>
          </ul>
          <div className="govuk-pagination__next">
            <a className="govuk-link govuk-pagination__link" href="#" rel="next"> <span className="govuk-pagination__link-title">Next</span> <svg className="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
              </svg></a>
          </div>
        </nav>
      }
    </>
  )
}

export default Workflow
