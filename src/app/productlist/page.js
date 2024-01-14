// "use client";
// /// fetch data in a client component
// import { useEffect, useState } from "react";
// export default function Page() {
//   const [product, setProduct] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     let data = await fetch("https://dummyjson.com/products");
//     const resut = await data.json();
//     console.log("dadaads", resut);
//     setProduct(resut.products);
//   };
//   return (
//     <div>
//       <h1>Product List</h1>
//       {product?.map((value, index) => {
//         return (
//           <h3 key={index}>
//             Name: {value?.title},<br></br> Price: ${value?.price}
//           </h3>
//         );
//       })}
//     </div>
//   );
// }

//fetch data in a server component
import Product from "./product";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  const resut = await data.json();
  return resut;
}
export default async function Page() {
  //using server component with client component
  let products = await productList();
  return (
    <div>
      <h1>Product List</h1>
      {products?.map((value, index) => {
        return (
          <h3 key={index}>
            Name: {value?.title},<br></br>
            <Product price={value.price} />
          </h3>
        );
      })}
    </div>
  );
}
