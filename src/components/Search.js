import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import { SearchIcon } from '@heroicons/react/solid'

const Search = ({
  search,
  setSearch,
  onOrderChange,
  onOrderDirectionChange,
  assetName,
  orderDirection,
}) => {
  const placeholder = `Search for ${assetName}`
  return (
    <div className='items-center block mt-6 sm:flex gap-10'>
      <label htmlFor='search' className='sr-only'>
        {placeholder}
      </label>
      <div className='relative flex-grow rounded-md shadow-sm'>
        <input
          type='search'
          name='search'
          id='search'
          value={search}
          onChange={setSearch}
          className='block w-full pr-10 text-gray-800 bg-white border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
          placeholder={placeholder}
        />
        <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
          <SearchIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
        </div>
      </div>
      <div className='mt-4 min-w-[200px] sm:mt-0 items-center flex gap-4'>
        <label htmlFor='orderBy' className='sr-only'>
          Order By
        </label>
        <select
          id='orderBy'
          name='orderBy'
          className='inline-block py-2 pl-3 pr-10 text-base text-gray-800 bg-white border-gray-300 cursor-pointer min-w-max focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
          onChange={(e) => onOrderChange(e.target.value)}
        >
          <option value='alphabetic'>Order By</option>
          <option value='size'>Size</option>
          <option value='added'>Last Added</option>
          <option value='views'>Views</option>
          <option value='alphabetic'>Alphabetic</option>
        </select>
        {orderDirection === 'desc' ? (
          <Tippy content='Descending'>
            <button
              title='Descending'
              className='items-center h-9 flex justify-center px-3 text-base text-gray-800 bg-white border border-gray-300 cursor-pointer min-w-max sm:text-sm rounded-md'
              onClick={() => onOrderDirectionChange('asc')}
            >
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z' />
                <path d='M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z' />
                <path d='M14 15l3 3l3 -3' />
                <path d='M17 18v-12' />
              </svg>
            </button>
          </Tippy>
        ) : (
          <Tippy content='Ascending'>
            <button
              className='items-center h-9 flex justify-center px-3 text-base text-gray-800 bg-white border border-gray-300 cursor-pointer min-w-max sm:text-sm rounded-md'
              onClick={() => onOrderDirectionChange('desc')}
            >
              <svg
                className='w-6 h-6'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M14 9l3 -3l3 3' />
                <path d='M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z' />
                <path d='M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z' />
                <path d='M17 6v12' />
              </svg>
            </button>
          </Tippy>
        )}
      </div>
    </div>
  )
}

export default Search
