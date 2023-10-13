import React, { useState } from 'react';
import './table.css';
const Table = () => {
  // Sample data for the table
  const tableData = [
    { id: 1, firstName: 'Mark', lastName: 'Otto', handle: '@mdo' },
    { id: 2, firstName: 'Jacob', lastName: 'Thornton', handle: '@fat' },
    { id: 3, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter' },
    { id: 4, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter' },
    { id: 5, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter' },
    { id: 6, firstName: 'Larry', lastName: 'the Bird', handle: '@twitter' }
    // Add more data rows as needed
  ];
  // Number of rows to display per page
  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last data rows to display
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle page navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
    <div className='table-responsive'>
      <table className="table table-bordered w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row) => (
            <tr key={row.id}>
              <th scope="row">{row.id}</th>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.handle}</td>
              <td>{row.handle}</td>
              <td>{row.handle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <ul className="pagination">
        {Array.from({ length: Math.ceil(tableData.length / rowsPerPage) }, (_, index) => (
          <li
            key={index + 1}
            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
          >
            <button className="page-link" onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Table;
