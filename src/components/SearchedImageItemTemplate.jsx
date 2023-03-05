const SearchedImageItemTemplate = ({ data }) => {
  return (
    <div
      className='group flex flex-col py-3 cursor-pointer'
      onClick={() => window.open(data.image.contextLink, '_blank')}>
      <div className='rounded-xl overflow-hidden dark-bg-red bg-black/[0.3] h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow-c'>
        <img className='h-full w-full object-contain' src={data.link} alt='' />
      </div>
      <div className='text-xs dark:text-[#fff]/70 text-[#70757a] pt-2'>
        {data.displayLink}
      </div>
      <div className='text-sm dark:text-[#fff]/90 text-[#3c4043] truncate pt-1 group-hover:underline'>
        {data.title}
      </div>
    </div>
  );
};

export default SearchedImageItemTemplate;
