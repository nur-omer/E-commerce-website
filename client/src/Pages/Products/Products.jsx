import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../Components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrices, setMaxPrices] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const { data, error, loading } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const handelChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCategories(
      isChecked
        ? [...selectedSubCategories, value]
        : selectedSubCategories.filter((item) => item !== value)
    );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkBox"
                value={item.id}
                id={item.id}
                onChange={handelChange}
              />
              <label htmlFor={item.id}> {item.attributes.title} </label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by prices</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrices}
              onChange={(e) => setMaxPrices(e.target.value)}
            />
            <span>{maxPrices}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value={sort}
              onChange={() => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value={sort}
              onChange={() => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
        <div className="filterItem"></div>
        <div className="filterItem"></div>
      </div>
      <div className="right">
        <img
          src="/assets/background.jpeg"
          alt="background"
          className="catImg"
        />
        <List
          catId={catId}
          maxPrices={maxPrices}
          sort={sort}
          subCategory={selectedSubCategories}
        />
      </div>
    </div>
  );
}

export default Products;
