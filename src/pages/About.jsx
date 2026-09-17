import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const brands = [
  { id: 1, name: "Samsung", image: "/images/brands/samsung.png" },
  { id: 2, name: "boAt", image: "/images/brands/boat.png" },
  { id: 3, name: "Puma", image: "/images/brands/puma.png" },
  { id: 4, name: "LG", image: "/images/brands/lg.png" },
  { id: 5, name: "Philips", image: "/images/brands/philips.png" },
  { id: 6, name: "The Ordinary", image: "/images/brands/ordinary.png" },
  { id: 7, name: "Nivea", image: "/images/brands/nivea.png" },
  { id: 8, name: "Himalaya", image: "/images/brands/himalaya.png" },
  { id: 9, name: "Apple", image: "/images/brands/apple.png" },
  { id: 10, name: "Fastrack", image: "/images/brands/fastrack.png" },
  { id: 11, name: "Amazon", image: "/images/brands/amazon.png" },
  { id: 12, name: "Levi's", image: "/images/brands/levis.png" },
  { id: 13, name: "Nike", image: "/images/brands/nike.png" },
  { id: 14, name: "Adidas", image: "/images/brands/adidas.png" },
  { id: 15, name: "Zara", image: "/images/brands/zara.png" },
  { id: 16, name: "H&M", image: "/images/brands/hm.png" },
  { id: 17, name: "Canon", image: "/images/brands/canon.png" },
  { id: 18, name: "Dyson", image: "/images/brands/dyson.png" },
  { id: 19, name: "Intel", image: "/images/brands/intel.png" },
  { id: 20, name: "Ray-Ban", image: "/images/brands/rayban.png" }
];

function About() {
  return (
    <>
      <main className="about-page">
        <section className="about-hero">
          <div className="about-content">
            <div className="about-label">
              <span></span>
              ABOUT US
            </div>

            <h1>About <span>us</span></h1>

            <h2>
              Making everyday shopping simpler,
              <br />
              faster and more enjoyable.
            </h2>

            <p>
              At ShopKart, we believe great products should be accessible
              to everyone. We are an online shopping destination offering
              a wide range of high-quality products at great prices,
              delivered right to your doorstep.
            </p>

            <p>
              From fashion and electronics to home essentials and more —
              we're here to make shopping easier, better, and more
              delightful for you.
            </p>

            <div className="about-buttons">
              <Link to="/products" className="shop-btn">
                Shop now <span>→</span>
              </Link>

              <a href="#brands" className="learn-btn">Learn more</a>
            </div>

            <div className="about-tagline">
              Shop Smarter, Live Better
              <span></span>
            </div>
          </div>
        </section>

        <section className="brands-section" id="brands">
          <div className="brands-heading">
            <h2>Trusted by leading brands</h2>

            <p>
              We're proud to partner with some of the world's most trusted
              brands to bring you the best products and shopping experience.
            </p>
          </div>

          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-item" key={brand.id}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default About;