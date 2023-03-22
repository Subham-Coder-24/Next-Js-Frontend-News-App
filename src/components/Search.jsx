import { newsAdd } from "@/redux/actions/newsSlice";
import { fetchEverything } from "@/utils/Requests";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const data = await fetchEverything(query);
    dispatch(newsAdd(data.articles));
  };

  return (
    <form className="max-w-sm sm:px-4 w-32  sm:w-60  " onSubmit={handleSearchSubmit}>
      <div className="relative ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-32 sm:py-2 py-1 pl-12 pr-4 text-black border border-black rounded-full  outline-none bg-[#FFFBF5] sm:focus:w-full transition-all duration-300"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
