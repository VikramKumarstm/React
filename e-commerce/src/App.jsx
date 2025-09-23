import { useEffect, useState } from "react";
import "./App.css";
import Category from "./Category";
import axios from "axios";

function App() {
  let [category, setCategory] = useState([]);
  let [product, setProduct] = useState([]);
  let [categoryData, setCategoryData] = useState("");

  const getCategoryList = () => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data)
        setCategory(data);
      });
  };

  const getProductData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((data) => {
        // console.log(data.products)
        setProduct(data.products);
      });
  };

  useEffect(() => {
    getCategoryList();
    getProductData();
  }, []);

  useEffect(() => {
    if (categoryData !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${categoryData}`)
        .then((res) => res.data)
        .then((data) => {
          setProduct(data.products);
        });
    }
  }, [categoryData]);

  return (
    <>
      <div className="py-[40px]">
        <div className="w-full mx-auto">
          <h1 className="text-[40px] font-bold text-center pb-4">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <h3 className="text-[25px] font-500 pl-[10px] pb-[10px]">
                Product Category
              </h3>
              <Category category={category} setCategoryData={setCategoryData} />
            </div>
            <div className="grid grid-cols-3 grid-flow-row-dense gap-4 pr-2">
              {product.length >= 1 ? <ProductItems items={product} /> : "Product Not Found"}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductItems({ items }) {
  return items.map((value, idx) => {
    return (
      <div className="shadow-lg text-center pb-4">
        <img src={value.images[0]} alt="" className="w-[100%] h-[250px]"/>
        <h2 className="text-[20px] font-semibold">{value.title}</h2>
        <p className="font-bold">RS. {value.price}</p>
      </div>
    );
  });
}
