import bestseller from "../assets/Images/best-seller.webp"
function About(){

    return(
        <>
      <div className="container-fluid my-5">
        <div className="text-center mb-4">
          <h1>ABOUT US</h1>
        </div>
        <div className="row px-5">
          <div className="col-lg-6 mb-3 ">
            <div className="bestseller">
                <img src={bestseller} className="img-sty" alt="..."/>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="about-info-heading">Why Choose Us?</h2>
            <p className="about-info-body ">
              We offer a unique blend of quality, artistry, and exceptional
              service that sets us apart. Our flowers are sourced from the
              finest growers, ensuring that each bloom is fresh, vibrant, and
              long-lasting. Our skilled florists meticulously craft each
              arrangement, transforming every bouquet into a stunning
              masterpiece that perfectly conveys the desired sentiment for any
              occasion. Moreover, our customer service is unparalleled,
              reflecting our commitment to exceeding expectations and making
              every purchase a delightful and memorable experience. Whether
              celebrating a joyous occasion, extending a heartfelt apology, or
              simply brightening someone\s day, our flowers are the ideal choice
              for expressing your feelings with elegance, beauty, and grace.
            </p>
            <button className="btn btn-primary" id="b2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
    )

}

export default About;