import React from 'react';
import { Navbar, Container, Nav, NavbarCollapse } from 'react-bootstrap';
import Link from 'next/link';
import styles from "./styles.module.css";
import Image from 'next/image'

const NavbarPage = () => {
  return (
    <section className="slider_section">
      <header className={styles.header_section}>
        <Navbar data-bs-theme="primary">
          <Container className="px-3 px-xl-5">
            <NavbarCollapse>
              <Navbar.Brand href="" className="me-auto">
                <Image src="/assets/images/logo.png" alt="" width={65} height={40} style={{ marginLeft: '-100px' }} />
                <span>Spering</span>
              </Navbar.Brand>
              <Nav className="me-auto" >
                <Link href="./" className="nav-link" style={{ color: '#fff' }}>
                  Home
                </Link>
                <Nav.Link href="/about" style={{ color: '#fff' }}>About</Nav.Link>
                <Nav.Link href="/users" style={{ color: '#fff' }}>Freelancers</Nav.Link>
                <Nav.Link href="/category" style={{ marginRight: '550px', color: '#fff' }}>Category</Nav.Link>
              </Nav>

              <Nav className="ms-auto">
                <Link href="./signup" className="nav-link" style={{ color: '#fff' }}>
                  Signup
                </Link>
                <Link href="./login" className="nav-link" style={{ color: '#fff' }}>
                  Login
                </Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <div className="detail-box">
                    <h1>
                      You Can <br />
                      Hire Freelancer <br />
                      Here
                    </h1>
                    <p>
                      Only the trusted freelancers in the industry
                      Credibility is a must.
                    </p>
                    <div className="btn-box">
                      <Link href="./about" className="btn-1">
                        About Us
                      </Link>
                      <Link href="./quote" className="btn-2">
                        Get A Quote
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="offset-md-1 col-md-4 img-container">
                  <div className="img-box">
                    <Image src="/assets/images/slider-image1.png" alt="" width={2000} height={400} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default NavbarPage;