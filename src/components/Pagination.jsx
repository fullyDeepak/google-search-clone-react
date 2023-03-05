import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useParams, useNavigate } from 'react-router-dom';

import Logo from '../assets/google-pagination-logo.png';
import { pagination } from '../utils/Constants';

const Pagination = ({ queries }) => {
  const { query } = useParams();
  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const paginationClickhandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };
  return (
    <div className='flex flex-col items-center py-14 max-w-[700px]'>
      <div className='relative text-[#4285f4]'>
        {queries.previousPage && (
          <div
            className=' absolute left-[-30px] md:left-[-40px] top-[10px]'
            onClick={() =>
              paginationClickhandler(queries.previousPage[0].startIndex)
            }>
            <FiChevronLeft
              size={20}
              className='cursor-pointer dark:text-[#8ab4f8]'
            />
            <div className='hover:underline dark:text-[#8ab4f8] cursor-pointer absolute left-[-5px] top-[30px] hidden md:block'>
              Prev
            </div>
          </div>
        )}
        <img
          className='dark:brightness-0 dark:contrast-0 w-[250px] md:w-[300px]'
          src={Logo}
          alt=''
        />
        {queries.nextPage && (
          <div
            className='absolute right-[-30px] md:right-[-40px] top-[10px]'
            onClick={() =>
              paginationClickhandler(queries.nextPage[0].startIndex)
            }>
            <FiChevronRight
              size={20}
              className='cursor-pointer dark:text-[#8ab4f8]'
            />
            <div className='hover:underline dark:text-[#8ab4f8] cursor-pointer absolute left-[-5px] top-[30px] hidden md:block'>
              Next
            </div>
          </div>
        )}
      </div>
      <div className='flex gap-3 dark:text-[#8ab4f8] text-[#4285f4] text-sm'>
        {pagination.map((p) => (
          <span
            key={p.page}
            onClick={() => paginationClickhandler(p.startIndex)}
            className={`cursor-pointer hover:underline ${
              page === p.startIndex
                ? 'hover:no-underline cursor-auto dark:text-[#bdc1c6] text-black'
                : ''
            }`}>
            {p.page}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
