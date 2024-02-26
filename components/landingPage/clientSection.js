import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="carousel-arrow">&#8249;</span>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <span className="carousel-arrow">&#8250;</span>
    </div>
  );
};

function ClientSection() {
  const testimonialData = [
    {
      name: "John Hissona",
      content:
        "wholeheartedly recommend [Spering] to anyone seeking a skilled and reliable freelancer. Their professionalism, expertise, and commitment to delivering exceptional results make them a true asset to any project. I look forward to the opportunity to collaborate with them again in the future."

    },
    {
      name: "Michael Clarke",
      content:
        "You could talk about their communication skills, friendliness, professionalism, ease of working with them, etc. Whatever was great about working with them."

    },
    {
      name: "John Manthon",
      content:
        "Communication was consistently clear and timely, fostering a collaborative and productive environment. [Spering] was always responsive to my queries and receptive to feedback, ensuring that the project evolved in line with my vision. Their proactive approach and initiative significantly contributed to the success of the project."

    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="client_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-10 mx-auto">
            <div className="heading_container">
              <h2>Testimonials</h2>
            </div>
            <Slider {...settings}>
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="detail-box">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.content}</p>
                  <Image src="/assets/images/quote.png" alt="" width={27} height={23} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection;
