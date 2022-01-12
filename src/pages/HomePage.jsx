import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MediaCard from "../components/MediaCard";
import Pagination from "../components/Pagination";
import { productContext } from "../context/ProductContext";

const HomePage = () => {
  const { getProducts, product } = useContext(productContext);
  const navigate = useNavigate();
  const [brandValue, setBrandValue] = useState("");

  let object = new URLSearchParams(window.location.search);
  function filterProducts(key, value) {
    object.set(key, value);
    let newUrl = `${window.location.pathname}?${object.toString()}`;
    navigate(newUrl);
    getProducts();
    setBrandValue(value);
  }

  useEffect(() => {
    setBrandValue(object.get("category"));
  }, [object]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <img
        className="photo"
        src="https://punchbowlsocial.com/wp-content/uploads/2019/10/PBS_composite_MIN_PROD.png"
        alt="photo"
      />

      <div className="home-page">
        <div className="sidebar">
          <FormControl className="radio-grrr" component="fieldset">
            <FormLabel
              className="category_h2 "
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontFamily: "Arvo, serif",
                letterSpacing: "1.10px",
                fontSize: "30px",
                fontWeight: "500",
              }}
              component="legend"
            >
              Меню
            </FormLabel>
            <RadioGroup
              aria-label="gender"
              value={brandValue}
              name="radio-buttons-group"
              onChange={(e) => filterProducts("category", e.target.value)}
            >
              <div className="filter">
                <FormControlLabel
                  value="Салат"
                  control={<Radio />}
                  style={{ fontFamily: "Arvo, serif" }}
                  label="Салат"
                />
                <FormControlLabel
                  value="Обед"
                  control={<Radio />}
                  style={{ fontFamily: "Arvo, serif" }}
                  label="Обед"
                />
                <FormControlLabel
                  value="Ужин"
                  control={<Radio />}
                  style={{ fontFamily: "Arvo, serif" }}
                  label="Ужин"
                />
                <FormControlLabel
                  value="Десерт"
                  control={<Radio />}
                  style={{ fontFamily: "Arvo, serif" }}
                  label="Десерт"
                />
              </div>
            </RadioGroup>
          </FormControl>
        </div>

        <div className="products2">
          {product ? (
            product.map((product) => (
              <MediaCard product={product} key={product.id} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>
        <Pagination />
      </div>
      <img
        className="photo"
        src="https://punchbowlsocial.com/wp-content/uploads/2020/02/Home_Carousel_1-2.png"
        alt="photo"
      />

      <div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
