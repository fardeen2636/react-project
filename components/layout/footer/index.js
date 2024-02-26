import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'
import Image from 'next/image'
function FooterPage() {

  return (
    <section className={styles.footer_section}>
      <div className="info_container layout_padding-top">
        <div className="container">
          <div className="info_top">
            <div className={styles.info_logo}>
              <Image src="/assets/images/logo.png" alt="" width={60} height={64} />
              <span>Spering</span>
            </div>
          </div>
          <div className="info_main">
            <div className="row">
              <div className="col-md-3 col-lg-2">
                <div className="info_link-box">
                  <h5>Useful Link</h5>
                  <ul>
                    <li className=" active">
                      <Link className="" href="./">
                        Home{""}
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" href="/about">
                        About{" "}
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" href="./users">
                        Work{" "}
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" href="./category">
                        Category{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3  ">
                <h5>Offices</h5>
                <p>
                  123 Main Street
                  Cityville, State 12345
                </p>
              </div>
              <div className="col-md-3 col-lg-2 offset-lg-1">
                <h5>Connect Us</h5>
                <div className={styles.social_box}>
                  <Link href="#">
                    <Image src="/assets/images/fb.png" alt="" width={30} height={30} />
                  </Link>
                  <Link href="#">
                    <Image src="/assets/images/twitter.png" alt="" width={37} height={31} />
                  </Link>
                  <Link href="#">
                    <Image src="/assets/images/linkedin.png" alt="" width={37} height={39} />
                  </Link>
                  <Link href="#">
                    <Image src="/assets/images/instagram.png" alt="" width={37} height={39} />
                  </Link>
                  <Link href="#">
                    <Image src="/assets/images/youtube.png" alt="" width={46} height={32} />
                  </Link>
                </div>

              </div>
              <div className="col-md-3  offset-lg-1">
                <div className="info_form ">
                  <h5>Newsletter</h5>
                  <form action="">
                    <input type="email" placeholder="Email" />
                    <button className={styles.footer}>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-10 mx-auto">
              <div className="info_contact layout_padding2">
                <div className="row">
                  <div className="col-md-3">
                    <Link href="#" className="link-box">
                      <div className="img-box">
                        <Image src="/assets/images/location.png" alt="" width={24} height={36} />
                      </div>
                      <div className="detail-box">
                        <h6>Europe</h6>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-4">
                    <Link href="#" className="link-box">
                      <div className="img-box">
                        <Image src="/assets/images/mail.png" alt="" width={40} height={27} />
                      </div>
                      <div className="detail-box">
                        <h6>Spering@gmail.com</h6>
                      </div>
                    </Link>
                  </div>
                  <div className="col-md-5">
                    <Link href="#" className="link-box">
                      <div className="img-box">
                        <Image src="/assets/images/call.png" alt="" width={27} height={38} />
                      </div>
                      <div className="detail-box">
                        <h6>Call +01 1234567890</h6>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid footer_section ">

        <div className="container">
          <p>
            &copy; <span id="displayDate"></span>  2024 All Rights Reserved By Spering
          </p>
          <center />
        </div>
      </footer>
    </section>
  )
}

export default FooterPage;
