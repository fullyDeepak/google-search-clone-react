import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import MicIcon from '../assets/mic.svg';
import ImageIcon from '../assets/image.svg';

const SearchInput = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || '');
  const navigate = useNavigate();
  const searchQueryHandler = (e) => {
    if (e?.key === 'Enter' && searchQuery?.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };

  return (
    <div
      id='searchBox'
      className='h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border dark:border-[#5f6368] dark:hover:bg-[#303134] border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-[#ffffff00] dark:focus-within:bg-[#303134] focus-within:shadow-c focus-within:border-[#ffffff00]'>
      <AiOutlineSearch size={18} color='#9aa0a6' />
      <input
        type='text'
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}
        autoFocus
        className='grow bg-inherit outline-0 dark:text-[#e8eaed] text-black/[0.87]'
      />
      <div className='flex items-center gap-3'>
        {searchQuery && (
          <IoMdClose
            size={24}
            color='#70757a'
            className='cursor-pointer'
            onClick={() => setSearchQuery('')}
          />
        )}
        <img className='h-6 w-6 cursor-pointer' src={MicIcon} alt='' />
        <img className='h-6 w-6 cursor-pointer' src={ImageIcon} alt='' />
      </div>
    </div>
  );
};

export default SearchInput;
