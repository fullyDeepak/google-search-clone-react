import { TbGridDots } from 'react-icons/tb';

import ProfileRing from '../assets/profile-ring.svg';

const ProfileIcon = () => {
  return (
    <div className='flex gap-2'>
      <span className='hidden h-10 w-10 md:flex items-center justify-center rounded-full cursor-pointer dark:hover:bg-slate-600 hover:bg-black/[0.07]'>
        <TbGridDots size={20} className='text-[#5f6368] dark:text-white' />
      </span>
      <span className='h-10 w-10 relative flex justify-center items-center'>
        <img className='absolute' src={ProfileRing} alt='' />
        <span className='h-8 w-8 rounded-full overflow-hidden'>
          <img
            className='h-full w-full object-cover '
            src='https://xsgames.co/randomusers/avatar.php?g=male'
            alt=''
          />
        </span>
      </span>
    </div>
  );
};

export default ProfileIcon;
