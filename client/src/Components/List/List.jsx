import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

function List({ maxPrices, catId, sort, subCategory }) {
  const { data, error, loading } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCategory.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrices}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
}

export default List;
