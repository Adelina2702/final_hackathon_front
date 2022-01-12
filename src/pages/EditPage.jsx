import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { productContext } from "../context/ProductContext";

const EditPage = () => {
  const { saveEditedProducts, getProductsToEdit, productToEdit } =
    useContext(productContext);
  const params = useParams();
  useEffect(() => {
    getProductsToEdit(params.id);
  }, []);
  const schema = yup.object().shape({
    name: yup.string().min(2).max(30).required("Required"),
    price: yup.string().min(3).max(255).required("Required"),
    category: yup.string().required("Required"),
    type: yup.string().required("Required"),
    img: yup.string().required("Required"),
  });
  const navigate = useNavigate();
  return (
    <div>
      <h2>Редактирование</h2>
      {productToEdit ? (
        <Formik
          validationSchema={schema}
          onSubmit={(data, { resetForm }) => {
            console.log(data);
            saveEditedProducts(data);
            navigate(-1);
          }}
          initialValues={productToEdit}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form
              style={{ width: "90%", margin: "0 auto" }}
              className="bg-light p-4"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Название товара</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите название товара"
                  name="name"
                  onChange={handleChange}
                  isValid={!errors.name && touched.name}
                  isInvalid={!!errors.name}
                  value={values.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail2">
                <Form.Label>Цена товара</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите цену товара"
                  name="price"
                  onChange={handleChange}
                  isValid={!errors.price && touched.price}
                  isInvalid={!!errors.price}
                  value={values.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail1">
                <Form.Label>Категория товара</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="category"
                  onChange={handleChange}
                  isValid={!errors.category && touched.category}
                  isInvalid={!!errors.category}
                  value={values.category}
                >
                  <option>Выберите категорию</option>
                  <option value="Салат">Салат</option>
                  <option value="Обед">Обед</option>
                  <option value="Ужин">Ужин</option>
                  <option value="Десерт">Десерт</option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Фото товара</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Введите фото"
                  name="image"
                  onChange={handleChange}
                  isValid={!errors.img && touched.img}
                  isInvalid={!!errors.img}
                  value={values.img}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.img}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                style={{
                  border: "none",
                  marginLeft: "0",
                  backgroundColor: "#1C374C",
                }}
                variant="primary"
                type="submit"
              >
                Сохранить изменения
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default EditPage;
