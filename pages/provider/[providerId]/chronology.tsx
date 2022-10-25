import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { Provider } from '../../../types/provider';
import searchData from '../../../data/search.json';
import { Fieldset, Table } from 'govuk-react';
import type { Chronology as ChronologyType } from '../../../types/chronology';
import chronologyData from '../../../data/chronology.json';
import Fuse from 'fuse.js';

const Chronology: NextPage = (props: any) => {
  const router = useRouter();
  const { providerId } = router.query;
  const provider: Provider | undefined = searchData.providers.find((providerItem: Provider) => {
    if (providerItem.id === providerId) {
      return providerItem;
    }
  });
  const [tableData, setTableData] = useState<ChronologyType[]>(chronologyData);
  const [chronologySortField, setChronologySortField] = useState<string>('dateEvent');
  const [chronologySortDirection, setChronologySortDirection] = useState<string>('dsc');
  const [chronologyFilterType, setChronologyFilterType] = useState<string[]>([]);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const ChronologyTypes = [... new Set(chronologyData.map(chronologyItem => chronologyItem.type))].sort();

  useEffect(() => {
    let dataForTable = chronologyData;

    if (searchTerm.length > 0) {
      const fuse = new Fuse(chronologyData, {
        keys: ['detail'],
        threshold: 0.8,
      });

      dataForTable = fuse.search(searchTerm).map(result => result.item);
    }

    setTableData(dataForTable.sort((a: any, b: any) => {
      if (a[chronologySortField] < b[chronologySortField]) return chronologySortDirection === 'asc' ? -1 : 1;
      if (a[chronologySortField] > b[chronologySortField]) return chronologySortDirection === 'asc' ? 1 : -1;
      return 0;
    })
    .filter((item: ChronologyType) => {
      if (chronologyFilterType.length === 0) {
        return true;
      }

      return chronologyFilterType.includes(item.type);
    }));
  }, [searchTerm, chronologyFilterType, chronologySortField, chronologySortDirection]);

  const changeSort = (fieldId: string) => {
    if (chronologySortField === fieldId) {
      setChronologySortDirection(chronologySortDirection === 'asc' ? 'dsc' : 'asc');
    } else {
      setChronologySortField(fieldId);
      setChronologySortDirection('asc');
    }
  };

  const updateFilterType = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      //setFilterType([...filterType, e.target.value]);
      setChronologyFilterType([...chronologyFilterType, e.target.value]);
    } else {
      //setFilterType(filterType.filter((item: string) => item !== e.target.value));
      setChronologyFilterType(chronologyFilterType.filter((item: string) => item !== e.target.value));
    }
  };

  const tableRows = tableData.map((chronologyItem: ChronologyType, index: number) => {
    const dateEvent = new Date(chronologyItem.dateEvent);
    const dateAdded = new Date(chronologyItem.dateAdded);

    return (
      <>
        <Table.Row className='no-table-border'>
          <Table.Cell><a className="govuk-link" href="#">{chronologyItem.name}</a></Table.Cell>
          <Table.Cell>{chronologyItem.type}</Table.Cell>
          <Table.Cell>{dateEvent.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}</Table.Cell>
          <Table.Cell>{dateAdded.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}</Table.Cell>
          <Table.Cell><a className="govuk-link" href="#">{chronologyItem.addedBy}</a></Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={5}><span className='govuk-!-font-size-16' dangerouslySetInnerHTML={{__html: chronologyItem.detail}}></span></Table.Cell>
        </Table.Row>
      </>
    )
  });

  const filters = ChronologyTypes.map((item: string, index: number) => {
    const matchCount = chronologyData.filter((chronologyItem: ChronologyType) => chronologyItem.type === item).length;

    return (
      <div className="govuk-checkboxes__item">
        <input checked={chronologyFilterType.includes(item)} className="govuk-checkboxes__input" disabled={matchCount === 0} id={`filterTypeCheckbox${index}`} key={index} onChange={updateFilterType} type="checkbox" value={item} />
        <label className="govuk-label govuk-checkboxes__label" htmlFor={`filterTypeCheckbox${index}`}>{item} ({matchCount})</label>
      </div>
    );
  });

  return (
    <>
      <h1 className="govuk-heading-xl govuk-!-margin-bottom-2" id="ProviderDetails">Chronology</h1>
      <button className='govuk-button govuk-button--secondary' onClick={() => {setShowFilter(!showFilter)}}>{showFilter ? 'Hide' : 'Show'} filter and search</button>
      {showFilter &&
        <div className='filter'>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-one-half">
              <h3 className='govuk-heading-m'>Filter by step type</h3>
              <Fieldset>
                <div className="govuk-checkboxes govuk-checkboxes--small">
                  {filters}
                </div>
              </Fieldset>
            </div>
            <div className="govuk-grid-column-one-half">
              <h3 className='govuk-heading-m'><label className="govuk-label govuk-label--m" htmlFor="searchTerm">Search detail</label></h3>
              <input placeholder='Enter your search term' className="govuk-input" id="searchTerm" name="searchTerm" onChange={(e) => {setSearchTerm(e.target.value)}} type="search" value={searchTerm} />
            </div>
          </div>

        </div>
      }
      <div className='split'>
        <h2 className='govuk-heading-s'>Chronology items for {provider?.providerName}</h2>
        <span className='govuk-caption-m govuk-!-font-size-16'>Showing {tableRows.length} results</span>
      </div>
      {tableRows.length > 0 &&
        <Table head={
            <Table.Row>
              <Table.CellHeader>
                <button className={`sortable ${chronologySortField === 'name' ? `sortable--${chronologySortDirection}` : ''}`} onClick={() => {changeSort('name')}}>Item name</button>
              </Table.CellHeader>
              <Table.CellHeader>
                <button className={`sortable ${chronologySortField === 'type' ? `sortable--${chronologySortDirection}` : ''}`} onClick={() => {changeSort('type')}}>Step type</button>
              </Table.CellHeader>
              <Table.CellHeader>
                <button className={`sortable ${chronologySortField === 'dateEvent' ? `sortable--${chronologySortDirection}` : ''}`} onClick={() => {changeSort('dateEvent')}}>Event date</button>
              </Table.CellHeader>
              <Table.CellHeader>
                <button className={`sortable ${chronologySortField === 'dateAdded' ? `sortable--${chronologySortDirection}` : ''}`} onClick={() => {changeSort('dateAdded')}}>Date added</button>
              </Table.CellHeader>
              <Table.CellHeader>
                <button className={`sortable ${chronologySortField === 'addedBy' ? `sortable--${chronologySortDirection}` : ''}`} onClick={() => {changeSort('addedBy')}}>Added by</button>
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

export default Chronology
