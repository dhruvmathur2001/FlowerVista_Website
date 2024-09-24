import i1 from "../assets/images/i1.jpg";
import lily from "../assets/images/lily.jpg";
import orchid from "../assets/images/orchid.webp";
import tulip from "../assets/images/tulip.jpg";
import dahlias from "../assets/images/dahlias.jpg";
import begonies from "../assets/images/begonies.avif";
import daisy from "../assets/images/Daisy.jpg";
import hydrangeas from "../assets/images/hydrangeas.avif";
import sunflower from "../assets/images/sunflower.jpeg";
import peony from "../assets/images/peony.png";
import petunia from "../assets/images/petunia.jpg";
import marigold from "../assets/images/marigold.jpg";

const products = [
  { id: 1, title: "ROSE", price: 450, image: i1 },
  { id: 2, title: "LILY", price: 440, image: lily },
  { id: 3, title: "ORCHIDS", price: 650, image: orchid },
  { id: 4, title: "TULIP", price: 540, image: tulip },
  { id: 5, title: "DAHLIAS", price: 540, image: dahlias },
  { id: 6, title: "BEGONIES", price: 540, image: begonies },
  { id: 7, title: "DAISY", price: 320, image: daisy },
  { id: 8, title: "HYDRANGEAS", price: 640, image: hydrangeas },
  { id: 9, title: "SUNFLOWER", price: 340, image: sunflower },
  { id: 10, title: "PEONY", price: 440, image: peony },
  { id: 11, title: "PETUNIA", price: 500, image: petunia },
  { id: 12, title: "MARIGOLD", price: 340, image: marigold },
];

function Products() {
  return (
    <div className="container-fluid px-5 prod-p prod-bg">
      <div className="products" id="PRODUCTS">
        <div className="heading">
          <h1 className="text-center">PRODUCTS</h1>
        </div>

        <div className="line row pt-3">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 mb-4">
              <div className="card border border-dark card-hover">
                <img
                  src={product.image}
                  className="card-img-top img-fluid"
                  alt={product.title}
                />
                <div className="card-body text-center bt card-bg-color">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    <a href="#" className="prod-link">
                      Rs. {product.price}
                    </a>
                    <span className="or_cost ms-2">
                      <del>Rs. {product.price + 60}</del>
                    </span>
                  </p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
