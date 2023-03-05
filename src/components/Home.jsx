import Logo from '../assets/google-logo.png';
import HomeHeader from './HomeHeader';
import SearchInput from './SearchInput';
import Footer from './Footer';
import { AiFillGithub } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import BuilderName from './BuilderName';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const btnSearch = async () => {
    let queryValue = await document
      .getElementById('searchBox')
      .getElementsByTagName('input')[0]?.value;
    if (queryValue.length > 0) {
      navigate(`/${queryValue}/${1}`);
    }
  };
  return (
    <div className='dark:bg-[#202124] flex h-[100vh] flex-col '>
      <HomeHeader />
      <main className='grow flex justify-center'>
        <div className='w-full px-5 flex flex-col items-center mt-20'>
          <img
            className=' dark:brightness-0 dark:contrast-0 w-[172px] md:w-[272px] mb-8'
            src={Logo}
            alt=''
          />
          <SearchInput />
          <div className='flex gap-2  text-[#3c4043] mt-8'>
            <button
              className='h-9 px-4 dark:bg-[#303134] dark:text-[#e8eaed] dark:hover:border-[#5f6368] dark:border-[#303134] bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2'
              onClick={btnSearch}>
              Google Search
            </button>
            <button className='h-9 px-4 dark:bg-[#303134] dark:text-[#e8eaed] dark:hover:border-[#5f6368] dark:border-[#303134] bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 '>
              I'm Feeling Lucky
            </button>
          </div>

          <div className='flex justify-center mt-10'>
            <BuilderName />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
