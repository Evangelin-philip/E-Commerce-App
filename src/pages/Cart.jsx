import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Table,Row,Col,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {removeFromCart} from '../redux/slice/cartSlice'
function Cart() {     
  const cart_items=useSelector((state)=>state.cartReducers)
  console.log(cart_items.map((item,index)=>console.log(item)))


  const dispatch=useDispatch()
  return (
    <div>
      <Row  className='ms-3 me-3 mt-5'>
        <Link to ={'/'} style={{textDecoration:'none'}} className='text-success w-100 text-end me-5 mb-5'><i class="align-middle fa-sharp fa-solid text-success fa-arrow-left fa-fade fa-2x"></i>{ "     "}Back To Home</Link>
          {
            cart_items?.length==0?<div height='100vh' className='w-100 d-flex flex-column justify-content-center align-items-center '>
            <img height={'300px'} src ='https://media2.giphy.com/media/LOL2XB5O5slfFE4K3M/giphy.gif?cid=6c09b952h672dht4zrx8audpefjlqcz5zb5oya5atp31r3ai' alt="img" className='rounded-circle mb-5'/>
            <h3  className='text-info fw-bolder mb-5'>Your Cart is Empty !!!</h3>
            </div>:
              // wishlisted_products?.length>0?wishlisted_products?.map((product,index)=>(
               <>
                  <Col lg={8}>
                    <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cart_items.map((item,index)=>(
                      <tr key={index}className='align-middle'>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>$ {item.price}</td>
                        <td><img height={'100px'} width={'100px'}src={item.images[0]} alt="Image Not Found" /></td>
                        <td>
                        <div className='d-flex justify-content-between'>
                  <Button onClick={()=>dispatch(removeFromCart(item.id))} className='btn btn-transparent' variant="transparent"><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
                  {/* onClick of add art btn, product removed from wishlist and added to cart */}
                  {/* <Button className='btn btn-transparent' variant="transparent"><i class="fa-solid fa-cart-plus text-success fa-2x"></i></Button> */}
                </div>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </Table> 
                  </Col>  
                  <Col lg={1}></Col>  
                   <Col lg={3}>
                    
                    <div className='border  p-3 rounded shadow'>
                    <h4 className='text-info text-center'>Cart Summary</h4>
                      <div className='mt-5 text-center'>
                        <h5>Total Products : <span> {cart_items.length}</span></h5>
                        <h5>Total  : <span className='text-danger fw-bolder'>   $  10000</span></h5>
                      </div>
                      <div className='d-grid mt-5'><Button variant="success" className='align-middle'>Check Out</Button></div>
                      </div>
                    </Col>
               </>
          }
         
      </Row>
    </div>
  )
}

export default Cart
