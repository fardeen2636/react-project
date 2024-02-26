import React from "react";
import Image from "next/image";
function Category() {
  return (
    <section className="category_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Category</h2>
        </div>
        <div className="category_container">
          <div className="box">
            <div className="img-box">
              <Image src="/assets/images/c1.png" alt="" width={90} height={91} />
            </div>
            <div className="detail-box">
              <h5>UI &amp; UX Design</h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image src="/assets/images/c2.png" alt="" width={80} height={67} />
            </div>
            <div className="detail-box">
              <h5>Web Development</h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image src="/assets/images/c3.png" alt="" width={90} height={51} />
            </div>
            <div className="detail-box">
              <h5>Digital Marketing</h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image src="/assets/images/c4.png" alt="" width={90} height={73} />
            </div>
            <div className="detail-box">
              <h5>Video Editing</h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image src="/assets/images/c5.png" alt="" width={60} height={79} />
            </div>
            <div className="detail-box">
              <h5>Logo Design</h5>
            </div>
          </div>
          <div className="box">
            <div className="img-box">
              <Image src="/assets/images/c6.png" alt="" width={80} height={53} />
            </div>
            <div className="detail-box">
              <h5>Game Development</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Category;