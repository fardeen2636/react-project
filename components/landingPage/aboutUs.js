import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
function AboutUs() {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-9 mx-auto">
            <div className="img-box">
              <Image src="/assets/images/about-img.jpg" alt="" width={900} height={600} />
            </div>
          </div>
        </div>
        <div className="detail-box">
          <h2>About Spering Company</h2>
          <div>
            <h4>Welcome to Spering
              Where Expertise Meets Innovation
            </h4>
          </div>
          <p>
            At Spering we are more than just a platform connecting freelancers with clients we are architects of collaboration, champions of creativity, and facilitators of success. Our journey began with a simple yet profound vision to redefine the way businesses access top-tier talent while providing freelancers with meaningful opportunities to showcase their skills.
            Whether you are a business seeking exceptional talent or a freelancer ready to showcase your skills, Spering is the catalyst for your success. Contact us today, and let's embark on a journey of innovation, collaboration, and unparalleled achievement.
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutUs;
