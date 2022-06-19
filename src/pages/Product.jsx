import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/announcement/announcement";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Newsletter from "../components/newsletter/newsletter";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  console.log(id)
  const [product,setProduct] = useState({})
  const [quantity,setQuantity] = useState(1)
  const [color,setColor] = useState("")
  const [size,setSize] = useState("")
  const dispatch = useDispatch();

  useEffect(()=>{
const fetchProduct = async ()=>{
  try{
    const res = await getProduct(id)
    console.log(res.data)
    setProduct(res.data)
     }catch{
    console.log("error")
     }
}
 fetchProduct()
  }
  ,[id])
  const handleQuantity = (type)=>{
     if(type==="remove") quantity>1 && setQuantity(quantity-1)
    else if(type==="add") setQuantity(quantity+1)
  }
  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };
  return (
    <Container>
              <Announcement />

      <Navbar />
   <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
         {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {
                product?.color?.map((item)=>            
                  <FilterColor color={item} onClick={()=>setColor(item)} />
                )
              }
            
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <select style={{    backgroundColor: 'transparent', height: '30px', color: 'rgb(149, 148, 148)',
                              border: '0.5px solid rgb(149, 148, 148)',fontWeight: '500'}} onChange={(e)=>setSize(e.target.value)} >
              {
                product?.size?.map((item)=>            
                <FilterSizeOption>{item}</FilterSizeOption>
                )
              }
              </select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity('remove')} />
              <Amount>{quantity} </Amount>
              <Add onClick={()=>handleQuantity('add')} />
            </AmountContainer>
            <Button onClick={handleClick} >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;