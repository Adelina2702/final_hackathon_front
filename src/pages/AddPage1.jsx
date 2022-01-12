import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import $axios from "../axios";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { productContext } from "../context/ProductContext";
import { useContext } from "react";
import Pagination from "../components/Pagination";

const AddPage1 = () => {
  const { addProducts, getProducts, deleteProduct, product } =
    useContext(productContext);

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [inputs, setInputs] = useState({
    img: "",
    name: "",
    category: "",
    composition: "",
    price: "",
  });
  let obj = new URLSearchParams(window.location.search);
  const [typeValue, setTypeValue] = useState("");
  const filterProducts = (key, value) => {
    obj.set(key, value);
    let newUrl = `${window.location.pathname}?${obj.toString()}`;
    navigate(newUrl);
    getProducts();
    setTypeValue(value);
  };
  useEffect(() => {
    getProducts();
  }, []);

  //   const handleSearch = async (e) => {
  //     const value = e.target.value;
  //     setSearch(value);
  //     const { data } = await $axios.get("/product?limit=20&q=" + value);
  //     console.log(data);
  //     setData(data.rows);
  //   };
  const getProduucts = async () => {
    try {
      const { data } = await $axios.get("/product");
      console.log(data);
      setData(data.rows);
    } catch (error) {
      console.log(error);
      console.log("error ");
    }
  };
  const navigate = useNavigate();

  // const handleFilter = async (e) => {
  //   const value = e.target.value;
  //   getProducts(value);
  //   console.log(data);
  //   setData(data.rows);
  // };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    addProducts(inputs);
    setInputs({
      img: "",
      name: "",
      category: "",
      composition: "",
      price: "",
    });
  };

  const handleDelete = async (id) => {
    deleteProduct(id);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="bodyy">
        <div
          style={{ textAlign: "center", fontFamily: "'Patua One', cursive" }}
        >
          <h3>Создать продукт</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div>
            <input
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                minWidth: "100%",
                margin: "10px 10px 0px 0px",
                padding: "8px",
                fontFamily: "'Patua One', cursive",
              }}
              type="text"
              name="img"
              placeholder="Изображение"
              onChange={handleChange}
              value={inputs.img}
            />
            <input
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                minWidth: "100%",
                margin: "10px 10px 0px 0px",
                padding: "8px",
                fontFamily: "'Patua One', cursive",
              }}
              type="text"
              name="name"
              placeholder="Название"
              onChange={handleChange}
              value={inputs.name}
            />
            <input
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                minWidth: "100%",
                margin: "10px 10px 0px 0px",
                padding: "8px",
                fontFamily: "'Patua One', cursive",
              }}
              type="text"
              name="category"
              placeholder="Категория"
              onChange={handleChange}
              value={inputs.category}
              id=""
            />

            <input
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                minWidth: "100%",
                margin: "10px 10px 0px 0px",
                padding: "8px",
                fontFamily: "'Patua One', cursive",
              }}
              type="text"
              name="composition"
              placeholder="Состав"
              onChange={handleChange}
              value={inputs.composition}
            />

            <input
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                minWidth: "100%",
                margin: "10px 10px 0px 0px",
                padding: "8px",
              }}
              type="number"
              name="price"
              placeholder="Цена"
              onChange={handleChange}
              value={inputs.price}
            />

            <button
              style={{
                width: "100%",
                border: "none",
                padding: "12px 20px",
                backgroundColor: "#00BBB4",
                color: "white",
                cursor: "pointer",
                textAlign: "center",
                marginTop: "10px",
                fontFamily: "'Patua One', cursive",
              }}
              onClick={handleClick}
            >
              Добавить
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "25px",
          }}
        >
          {product ? (
            product.map((product) => (
              <div key={product.id} className="main-cardss">
                <Card
                  style={{
                    width: "18rem",
                    display: "flex",
                    flexWrap: "wrap",
                    margin: "20px",
                  }}
                >
                  <Card.Img variant="top" src={product.img} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Title>{product.category}</Card.Title>
                    <Card.Title>{product.composition}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button
                      style={{
                        backgroundColor: "#00BBB4",
                        color: "white",
                        border: "none",
                      }}
                      onClick={() => {
                        navigate(`/edit/${product.id}`);
                        // getProducts();
                      }}
                    >
                      Изменить
                    </Button>

                    <Button
                      onClick={() => handleDelete(product.id)}
                      style={{
                        backgroundColor: "#f25e09",
                        color: "white",
                        border: "none",
                        margin: "20px",
                      }}
                    >
                      Удалить
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default AddPage1;
