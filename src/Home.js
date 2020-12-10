import React from "react";
import "./Home.css";
import Product from "./Product";
import Slider from "infinite-react-carousel";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Slider autoplay autoplaySpeed={3000}>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="banner-image"
              className="home__img"
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/GatewayATF/finalfestive/1500-600._CB417121706_.jpg"
              alt="banner-image"
              className="home__img"
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Accessories/GW/Electronics--accessories_DesktopHero_Template_1500x600._CB417104646_.jpg"
              alt="banner-image"
              className="home__img"
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/Jupiter20/GreatIndianBazaar/HD-14-pc-hero-1x._CB417074953_.jpg"
              alt="banner-image"
              className="home__img"
            />
          </div>
          <div>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/GatewayATF/finalfestive/Kids-1500-600._CB417121706_.jpg"
              alt="banner-image"
              className="home__img"
            />
          </div>
        </Slider>

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={500000.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={355000.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={50000.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={12999.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={100000}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={50000.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
