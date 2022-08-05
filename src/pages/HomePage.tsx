import React, { useEffect, useState } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';
import { useDebounce } from '../hooks/debounce';

interface IHomePage {}

export const HomePage = ({}: IHomePage) => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    console.log(debounced);
  }, [debounced]);

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && (
        <p className="text-center text-red-600">Something went wrong...</p>
      )}
      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-screen h-[42px] mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-200px shadow-md bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          facere atque vel totam nam illum dolore assumenda a tempora, enim,
          quasi officia animi iste fuga aspernatur necessitatibus vero
          veritatis? Repellendus!
        </div>
      </div>
    </div>
  );
};
