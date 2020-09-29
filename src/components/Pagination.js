import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({ pageSize, totalCount, currentPage, skip, base }) {

  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (

    <>
      <Link to={`${base}/${prevPage}`}>&#8592; Prev</Link>

      {Array.from({ length: totalPages}).map((_, i) => (
        <Link 
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i > 0 ? i + 1 : ''}`}
        >
          {i + 1}
        </Link>
      ))}

      <Link to={`${base}/${nextPage}`}>&#8594; Next</Link>
    </>

  )


}