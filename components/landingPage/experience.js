import Link from "next/link";
import React from "react";
import Image from "next/image";
function Experience() {
  return (
    <section className="experience_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="img-box">
              <Image src="/assets/images/experience-img.jpg" alt="" width={483} height={436} />
            </div>
          </div>
          <div className="col-md-7">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Best Experinced Freelancer Here</h2>
              </div>
              <p>
                Are you looking to hire skilled freelancers who can bring your projects to life Look no further Our platform connects you with a diverse pool of talented freelancers ready to tackle any task you have in mind. Whether you need creative designers, experienced developers, expert writers, or professionals in various other fields, our freelancers have the expertise to meet your unique requirementsAt our freelancing platform, we prioritize quality and efficiency. You can browse through a wide range of profiles, review portfolios, and find the perfect match for your project.
              </p>
              <div className="btn-box">
                <Link href="/chat" className="btn-1">
                  Chat
                </Link>
                <Link href="/users" className="btn-2">
                  Hire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
export default Experience;