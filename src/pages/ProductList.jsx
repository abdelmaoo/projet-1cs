import styled from "styled-components";

import Products from "../components/products/products";
import Announcement from "../components/announcement/announcement";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Newsletter from "../components/newsletter/newsletter";
import { useLocation } from "react-router-dom";
import { useState } from "react";



const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  color:black
`;
const Option = styled.option`
color : black
`;

const ProductList = () => {
  const path = useLocation()
  const cat = path.pathname.split("/")[2]
  console.log(cat)
  const [filters,setFilters] = useState({})
  const [sort,setSort] = useState("newset")
  const handleFilters = (e)=>{
  const value = e.target.value
  setFilters({
    ...filters , 
    [e.target.name] : value 
  })
  }
  console.log(filters)
  return (
    <Container>
              <Announcement />

      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <select style={{    backgroundColor: 'transparent', height: '30px', color: 'rgb(149, 148, 148)',
                              border: '0.5px solid rgb(149, 148, 148)',fontWeight: '500'}} name="color" onChange={handleFilters}>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
     
          <select style={{  marginLeft:'10px' ,   backgroundColor: 'transparent', height: '30px', color: 'rgb(149, 148, 148)',
                              border: '0.5px solid rgb(149, 148, 148)',fontWeight: '500'}} name="size" onChange={handleFilters}>
            <option disabled selected>
              Size
            </option>
            <option  value="Xs">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="Xl">XL</option>
          </select>
        </Filter>
        <Filter>
          <FilterText >Sort Products:</FilterText>
          <select style={{   marginLeft:'10px' , backgroundColor: 'transparent', height: '30px', color: 'rgb(149, 148, 148)',
                              border: '0.5px solid rgb(149, 148, 148)',fontWeight: '500'}} onChange={(e)=>{setSort(e.target.value) }}>
            <option selected value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;