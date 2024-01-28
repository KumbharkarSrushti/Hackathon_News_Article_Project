"use client"
import React, { useState, useEffect } from 'react';
import ProductCard from './productCard.js'; 

const NewsProduct = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-12-28&sortBy=publishedAt&apiKey=4ec780570c234ab1a4bf02f7fec5516a');
        const data = await response.json();

        if (response.ok) {
          setNews(data.articles);
        } else {
          console.error(data.message || 'Error fetching news data');
        }
      } catch (error) {
        console.error('Error fetching news data', error);
      }
    };

    fetchData();
  }, []);
  


  return (
    <ProductCard articles={news} />
  );
};

export default NewsProduct;
