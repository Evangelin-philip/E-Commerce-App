import React from "react";
import { Nav, Container, Navbar, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useSelector} from'react-redux'

function Header() {

  // ------------------------------changing wishlist count---------------------
  // state argument indicate store
  // state.wishlistReducers indicate update state/initial state 
  const wishlist_count=useSelector((state)=>state.wishlistReducers)

  // Changing cart count
  const cart_count=useSelector((state)=>state.cartReducers)

  console.log("wishlist_count",wishlist_count)
  return (
    <Navbar expand="lg" className="bg-info ">
      <Container>
        {/* dont use href, it maye refresh and load the page */}
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bolder",
            }}
          >
            <i
              class="fa-solid fa-truck-fast me-2"
              style={{ color: "#000000;" }}
            ></i>
            E-Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {/* for making the home and link links to float right ms-auto */}
          {/* <Nav className="me-auto"> */}
          <Nav className="ms-auto">
            <Nav.Link className="border rounded btn" ><Link  className="d-flex align-items-center"to={'/wishlist'} style={{color:"white",textDecoration:"none",fontWeight:'bold'}}>
            <i class="fa-solid fa-heart text-danger me-2"></i> Wishlist
            <Badge className="rounded ms-2" bg="light">{wishlist_count.length}</Badge></Link></Nav.Link>





            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <Nav.Link className="border rounded btn ms-3" ><Link className="d-flex align-items-center" to={'/cart'} style={{color:"white",textDecoration:"none",fontWeight:'bold'}}>
            <i class="fa-solid fa-cart-shopping text-warning me-2"></i> Cart
            <Badge className="rounded ms-2" bg='light'>{cart_count.length}</Badge></Link></Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
