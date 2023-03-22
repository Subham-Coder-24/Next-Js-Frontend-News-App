import React from 'react'
import { fetchHeadlines } from "@/utils/Requests";
import { useRouter } from 'next/router'


const Single = (props) => {

  const router = useRouter()
  const { id } = router.query
  // console.log(id);
  var arr = props.results.articles;
  // console.log(props.results.articles);
  // console.log(arr);
  // console.log(arr[0]);
  // console.log(arr[0].title.slice(0,5).toLowerCase());

  var item;
  for (var i = 0; i <= 20; i++) {
    // if(arr[i].title==null)continue;
    if (!arr[i].title) continue;
    if (arr[i].title.slice(0, 5).toLowerCase() == id) {
      item = arr[i];
      break;
    }
  }

  return (
    <div className="flex items-center justify-center mx-20 font-poppins">
      <div className="relative flex items-center justify-center w-[90%]">
        <img
          src={item.urlToImage}
          alt="image"
          className="w-full h-[500px] object-cover rounded-md "
        />

        <div className="absolute bottom-[-300px] bg-white w-[70%] p-6 rounded-lg shadow-lg">
          <h1 className="text-gray-500 mb-4">{item.author}</h1>
          <h1 className="font-bold text-4xl mb-4">{item.title}</h1>
          <p className="text-gray-500">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await fetchHeadlines();
  return {
    props: {
      results: data,
    },
  };
}

// //srt id in dymanic roution
export async function getStaticPaths() {
  const data = await fetchHeadlines();
  var post = data.articles;


  return {
    paths: post.map(a => {
      return {
        params: {
          id: a.title.slice(0, 5).toLowerCase()
        }
      }
    }), fallback: false
  }

}
export default Single