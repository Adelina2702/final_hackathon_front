import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import { productContext } from "../context/ProductContext";
import Comment from "../components/comments/Comment";

const DetailPage = () => {
  const { getDetails, productDetails } = useContext(productContext);
  const params = useParams();
  let user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getDetails(params.id);
  }, []);

  return (
    <>
      <div style={{ color: "white" }}>
        {productDetails ? (
          <>
            <div className="detail-page">
              <div className="detail-image">
                <img className="photochka" src={productDetails.img} alt="" />
              </div>
              <div>
                <h2>{productDetails.name}</h2>
                <p>{productDetails.composition}</p>
                {/* <Button variant="contained" color="primary">
                                    Добавить в корзину
                                </Button> */}
                <div>
                  <h4>Описание:</h4>
                  <ul className="character">
                    <li>
                      <strong>Цена: </strong>
                      <span> {productDetails.price} сом</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Container>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "500px",
                  }}
                >
                  {/* <Comments productId={productDetails.id} /> */}
                </div>
              </Container>
            </div>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <Comment />
    </>
  );
};

export default DetailPage;
