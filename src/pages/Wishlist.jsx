import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row,Col,Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slice/wishlistSlice' 
import { addToCart } from '../redux/slice/cartSlice'

function Wishlist() {
  // here we need to get the wishlisted items from state
  // state in store.js
  const wishlisted_products=useSelector((state)=>state.wishlistReducers)
  const dispatch=useDispatch()



  const handle_wishlistItem_to_cart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <>
       <Row className='text-info mt-5 ms-3' >
       <Link to ={'/'} style={{textDecoration:'none',paddingRight:'3rem'}} className='text-success w-100  text-end me-5'><i class="align-middle fa-sharp fa-solid text-success fa-arrow-left fa-fade fa-2x"></i>{ "     "}Back To Home</Link>
      {
        // as we dget data need to display as cards, no of cards= no of products
        wishlisted_products?.length>0?wishlisted_products?.map((product,index)=>(
        // -------------------------------COL AND CARD
        <Col key={index} className='mt-5' sm={12} md={6} lg={4} xl={3}>
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
              <Button onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-transparent' variant="transparent"><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
              {/* onClick of add art btn, product removed from wishlist and added to cart */}
              <Button onClick={()=>handle_wishlistItem_to_cart(product)}className='btn btn-transparent' variant="transparent"><i class="fa-solid fa-cart-plus text-success fa-2x"></i></Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      )):<div height='100vh' className='w-100 d-flex flex-column justify-content-center align-items-center '>
        <img height={'300px'} src ='https://media.giphy.com/media/3o6Zt4j96fDG4XzO0w/giphy.gif' alt="img" className='rounded-circle mb-5'/>
        <h3  className='text-info fw-bolder mb-5'>Your Wishlist is Empty !!!</h3>
        
        </div>
        
      }
    </Row>
    </>
  )
}

export default Wishlist
