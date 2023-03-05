import ProfileIcon from './ProfileIcon';

const HomeHeader = () => {
  return (
    <header className='mt-4 flex justify-between md:justify-end items-center gap-4 px-5'>
      <div className='flex gap-4'>
        <span className='dark:text-white text-black/[0.8] text-[13px] line-height hover:underline cursor-pointer'>
          Gmail
        </span>
        <span className='dark:text-white text-black/[0.8] text-[13px] line-height hover:underline cursor-pointer'>
          Images
        </span>
      </div>
      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
