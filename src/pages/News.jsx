import React, { useState, useEffect } from 'react';
import Newscards from '../components/Newscards';
import axios from 'axios';
import {ClipLoader} from "react-spinners"
const News = () => {
  const [news, setNews] = useState([]);
const [loader,setloader] = useState(false);

  const getNews = async () => {
    setloader(true);
    const res = await axios.get(
      'https://newsdata.io/api/1/news?apikey=pub_539938b49d375954b5ef25e28057911ce9612&q=sports'
    );
    
    const data = await res.data;
    setNews(data.results);
    console.log(data.results);
    setloader(false);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="bg-black min-h-screen py-10">
  <div className="container mx-auto text-center text-white mb-12">
    <h1 className="text-4xl font-bold text-yellow-400">Latest Sports News</h1>
    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
      Stay updated with all major sports news including updates from the world of MMA and other exciting sports. Although focused on MMA, we cover everything you need to know in the sports world!
    </p>
  </div>

  <div className="container sm:mx-auto flex justify-center items-center">
    {loader ? (
      <ClipLoader color="#f1fa80" size={150} />
    ) : news.length === 0 ? ( 
      <h1>No  news found...</h1>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-y-8">
        {news.map((results) => (
          <Newscards
            title={results.title} 
            photo={results.image_url}
            link={results.link}
            date={results.pubDate}
            story={results.description}
            source={results.source_url}
          />
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default News;
