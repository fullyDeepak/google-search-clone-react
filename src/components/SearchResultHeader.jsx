import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { GoSearch } from 'react-icons/go';
import { BsImage } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { RiVideoLine } from 'react-icons/ri';
import { SlTag } from 'react-icons/sl';

import Logo from '../assets/google-logo.png';
import SearchInput from './SearchInput';
import ProfileIcon from './ProfileIcon';
import { Context } from '../utils/ContextApi';
import { menu } from '../utils/Constants';

const SearchResultHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState('All');
  const { SetImageSearch } = useContext(Context);

  useEffect(() => {
    return () => SetImageSearch(false);
  }, []);

  const clickHandler = (menuItem) => {
    let isTypeImage = menuItem.name === 'Images';
    SetImageSearch(isTypeImage ? true : false);
    setSelectedMenu(menuItem.name);
  };
  return (
    <div className='dark:bg-[#202124] p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b dark:border-[#3c4043] border-[#edebeb] flex md:block flex-col items-center md:sticky top-0 bg-white'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col md:flex-row items-center grow'>
          <Link to='/'>
            <img
              className='dark:brightness-0 dark:contrast-0 mb-4 md:mb-0 md:block w-[92px] md:mr-10'
              src={Logo}
              alt=''
            />
          </Link>
          <SearchInput from='searchResult' />
        </div>
        <div className='absolute right-3 top-2 md:block md:static'>
          <ProfileIcon />
        </div>
      </div>

      <div className='dark:text-[#969ba1] text-[#5f6368] flex ml-[-12px] mt-3]'>
        {menu.map((menu, index) => (
          <span
            key={index}
            className={`flex items-center p-3  cursor-pointer relative ${
              selectedMenu === menu.name
                ? ' dark:text-[#8ab4f8] text-[#1a73e8]'
                : ''
            }`}
            onClick={() => clickHandler(menu)}>
            <span className='hidden md:block mr-2'>{menu.icon}</span>
            <span className='text-sm'>{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className='h-[3px] w-[calc(100%-20px)] absolute dark:bg-[#8ab4f8] bg-[#1a73e8] bottom-0 left-[10px] ' />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
