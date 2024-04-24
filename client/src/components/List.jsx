import React, { useState, useEffect } from "react";
import Card from "../components/Card";
const List = () => {
  const [loading, setLoading] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const URL = process.env.REACT_APP_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/words`);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let res = await response.json();

        setData(res.result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="py-6 w-[70%] mx-auto">
      <h1 className="mb-6 capitalize font-extrabold tracking-tight leading-none text-white text-2xl lg:text-4xl">
        Full content
      </h1>

      <div className="flex flex-wrap ">
        {data?.map((el, i) => (
          <Card el={el} key={i} />
        ))}
      </div>
    </div>
  );
};

export default List;
