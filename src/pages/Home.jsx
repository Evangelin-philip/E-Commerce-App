import React, { useState } from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { addToWishlist } from '../redux/slice/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';

function Home() {

  // ---------------onClick function----------------------
  const dispatch=useDispatch()
  const data=useFetch("https://dummyjson.com/products")
  console.log("data"+data);
  return (
    <Row className='text-info  ms-3'>
      {
        // as we dget data need to display as cards, no of cards= no of products
        data?.length>0?data?.map((product,index)=>(
        // -------------------------------COL AND CARD
        <Col key={index} className=' mt-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '20rem',backgroundColor:"white",color:"#000000", height:'30rem'}}>
          <Card.Img height='200px' variant="top" src={product?.thumbnail}/>
          <Card.Body>
            <Card.Title className='text-center'>{product.title}</Card.Title>
            <Card.Text className='text-center'>
              <p>{product?.description.slice(0,60)}...</p>
              <div className='d-flex justify-content-around align-items-center'>
                <p className='text-success fw-bolder text-info' >$ {product?.price}</p>
                <p className='text-success fw-bolder text-info'>{product?.rating} Rating</p>
              </div>
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-transparent' variant="transparent"><i class="fa-solid fa-heart text-danger fa-2x"></i></Button>
              <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-transparent' variant="transparent"><i class="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      )):<p className='text-info fw-bolder fs-4'>Noting To Display</p>
      }
    </Row>
  )
}

export default Home
