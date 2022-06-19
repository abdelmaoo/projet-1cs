import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../product/product";
import axios from 'axios'
import { SettingsPowerSharp } from "@material-ui/icons";
import { getProducts } from "../../api/products";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  //here we're fetching data according to category
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const result = await getProducts(cat)
        console.log(result)
        setProducts(result.data)
      }
      catch (err) {
        console.log(err)
      }

    }
    getAllProducts()
  }, [cat])

  //here we're fetching data according to filters size color 
  useEffect(() => {
    products.length > 0 && setFilteredProducts(products.filter((element) =>

      Object.entries(filters).every(([key, value]) =>
        element[key].includes(value)
         )
         )
         ) 
  }, [products, cat, filters])
  useEffect(() => {
   if(sort==="newest")
   {
setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt - b.createdAt ) )  
   }
   else if( sort === "asc")
   {
    setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.price - b.price ) )  
  }
   else
   {
    setFilteredProducts((prev)=>[...prev].sort((a,b)=>b.price - a.price ) )  
   }
  }, [sort])

  //here we're fetching data according to filters size color 


  return (
    <Container>
      {cat ? filteredProducts?.map((item) => (
        <Product item={item} key={item.id} />
      ))
        : products?.slice(0, 8).map((item) => (
          <Product item={item} key={item.id} />
        ))}
    </Container>
  );
};

export default Products;