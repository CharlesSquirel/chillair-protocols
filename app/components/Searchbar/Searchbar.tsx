import Search from "@/assets/icons/Search";

export default function Searchbar() {
  return (
    <div className='relative'>
      <label
        htmlFor='search'
        className='absolute w-[1px] h-[1px] m-[-1px] p-0 overflow-hidden border-0'
      >
        Wyszukaj
      </label>
      <Search className='absolute right-6 top-[50%] translate-y-[-50%]' />
      <input
        autoComplete='off'
        type='text'
        placeholder='Wyszukaj...'
        name='search'
        id='search'
        className='border h-[62px] rounded-full pl-4 border-secondary text-secondary  w-[558px] text-xl focus:border-primary focus:border-[3px] outline-none'
      />
    </div>
  );
}
