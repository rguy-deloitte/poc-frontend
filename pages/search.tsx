import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { Fieldset, H3, Heading, Link as LinkGds, LoadingBox, Paragraph, Table } from 'govuk-react'
import type { Provider } from '../types/provider';
import Fuse from 'fuse.js';
import data from '../data/search.json';

const Search: NextPage = (props: any) => {
  const [tableData, setTableData] = useState<Provider[]>(data.providers);
  const [searchTerm, setSearchTerm] = useState<string>(props.search);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filterFields, setFilterFields] = useState<string[]>(props.searchFilters);

  const fields: {fieldId: string, fieldName: string}[] = [
    {
      fieldId: 'providerName',
      fieldName: 'Name',
    },
    {
      fieldId: 'providerType',
      fieldName: 'Type',
    },
    {
      fieldId: 'mainPhone',
      fieldName: 'Telephone',
    },
    {
      fieldId: 'region',
      fieldName: 'Region',
    }
  ];

  useEffect(() => {
    if (searchTerm && searchTerm.length > 0) {
      const fuse = new Fuse(data.providers, {
        keys: filterFields.length > 0 ? filterFields : fields.map((item: {fieldId: string, fieldName: string}) => item.fieldId),
        threshold: 0.4,
      });

      setTableData(data.providers.filter((item: Provider) => fuse.search(searchTerm).map((item) => item.item.id).includes(item.id)));
    } else {
      setTableData(data.providers);
    }


  }, [searchTerm, filterFields]);

  const updateFilterField = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFilterFields([...filterFields, e.target.value]);
      props.setSearchFilters([...filterFields, e.target.value]);
    } else {
      setFilterFields(filterFields.filter((item: string) => item !== e.target.value));
      props.setSearchFilters(filterFields.filter((item: string) => item !== e.target.value));
    }
  };

  const tableRows = tableData.map((provider: Provider, index: number) => {
    return (
      <Table.Row key={index}>
        <Table.Cell>
          {provider.providerName}
        </Table.Cell>
        <Table.Cell>
          {provider.providerType}
        </Table.Cell>
        <Table.Cell>
          {provider.mainPhone}
        </Table.Cell>
        <Table.Cell>
          {provider.region}
        </Table.Cell>
      </Table.Row>
    )
  });

  const filters = fields.map((item: {fieldId: string, fieldName: string}, index: number) => {
    return (
      <div className="govuk-checkboxes__item">
        <input checked={filterFields.includes(item.fieldId)} className="govuk-checkboxes__input" id={`filterFieldCheckbox${index}`} key={index} onChange={updateFilterField} type="checkbox" value={item.fieldId} />
        <label className="govuk-label govuk-checkboxes__label" htmlFor={`filterFieldCheckbox${index}`}>{item.fieldName}</label>
      </div>
    );
  });

  return (
    <>
      <Heading>
        Search
      </Heading>
      <button className='govuk-button govuk-button--secondary' onClick={() => {setShowFilter(!showFilter)}}>{showFilter ? 'Hide' : 'Show'} filter</button>
      {showFilter &&
        <div className='filter'>
          <H3>Filter</H3>
          <Fieldset>
            <Fieldset.Legend>Fields</Fieldset.Legend>
            <div className="govuk-checkboxes govuk-checkboxes--small">
              {filters}
            </div>
          </Fieldset>
        </div>
      }
      <div className="govuk-form-group">
        <h1 className="govuk-label-wrapper"><label className="govuk-label govuk-label--l" htmlFor="searchTerm">
            Search for a provider
          </label>
        </h1>
        <input className="govuk-input" id="searchTerm" name="searchTerm" onChange={(e) => {setSearchTerm(e.target.value); props.setSearch(e.target.value)}} type="search" value={searchTerm} />
      </div>
      <H3>
        Providers
      </H3>
      {tableRows.length === 0 &&
        <Paragraph>No providers match your search</Paragraph>
      }
      {tableRows.length > 0 &&
        <Table head={
          <Table.Row>
            <Table.CellHeader>
              Name
            </Table.CellHeader>
            <Table.CellHeader>
              Type
            </Table.CellHeader>
            <Table.CellHeader>
              Telephone
            </Table.CellHeader>
            <Table.CellHeader>
              Region
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

export default Search
