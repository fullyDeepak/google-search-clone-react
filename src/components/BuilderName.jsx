import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const BuildName = () => {
  return (
    <div className='flex items-center text-lg dark:text-gray-400 text-[#5f6368]'>
      <span className='flex items-center'>
        Made&nbsp;with
        <span className='inline-block relative animate-heart '>❤️</span>
        by&nbsp;
        <span
          onClick={() =>
            window.open('https://github.com/fullyDeepak/', '_blank')
          }
          className='flex items-center  hover:bg-[#43853d] hover:text-white  hover:rounded-md cursor-pointer'>
          Deepak&nbsp; <AiFillGithub size={20} className='hover:text-white' />
        </span>
      </span>
    </div>
  );
};

export default BuildName;
