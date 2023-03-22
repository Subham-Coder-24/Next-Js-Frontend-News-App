import { selectAllNews } from "@/redux/actions/newsSlice";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const NewsSection = () => {
  const { news } = useSelector(selectAllNews);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  // Get current news items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-32 grid items-center justify-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5">
        {currentNews.map((item, i) => (
          <Post key={i} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <ul className="flex space-x-4 p-5">
          {Array.from({ length: Math.ceil(news.length / itemsPerPage) }, (_, i) => i + 1).map(
            (pageNumber) => (
              <li
                key={pageNumber}
                className={`${currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-gray-200"
                  } px-2 py-1 rounded-md cursor-pointer`}
                onClick={() => paginate(pageNumber)}
              >
                {pageNumber}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default NewsSection;