import { useRouter } from "next/router";
import React from "react";

const Categorybar = () => {
  const category = [
    {
      id: 1,
      name: "Business",
    },
    {
      id: 2,
      name: "Entertainment",
    },

    {
      id: 5,
      name: "Science",
    },
    {
      id: 6,
      name: "Sports",
    },
    {
      id: 7,
      name: "Technology",
    },
  ];
  const router = useRouter();
  const categor = router.query;
  return (
    <div className="flex flex-col  items-center mt-5 sm:mx-20 ">
      <div className="flex md:gap-5 gap-1">
        {category.map((item, i) => (
          <h1
            key={item.id}
            onClick={() => router.push(`/category/${item.name}`)}
            className= {categor.category===item.name?"cursor-pointer border-b-2 border-black p-1 transition-all duration-300 text-xs sm:text-lg":" cursor-pointer text-xs sm:text-lg "}
          >
            {item.name}
          </h1>
        
        ))}

        
      </div>
      <div className="bg-black h-[1px] w-full mt-5 mb-8"></div>
    </div>
  );
};

export default Categorybar;
