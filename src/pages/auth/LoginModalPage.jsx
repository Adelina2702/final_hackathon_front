import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { userContext } from "./../../context/UserContext";
import Toastify from "toastify-js";
import "./login.css";

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://punchbowlsocial.com/wp-content/uploads/2019/12/Home_Header.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Input = styled.input`
display: flex,
text-align: center;
justify-content: center;
min-width: 100%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #00bbb4;
  color: white;
  cursor: pointer;
  text-align: center;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
`;

const button = styled.button`
  border-style: none;
`;

const LoginModalPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // eslint-disable-line
  const { loginUser, errorMSG, logSuccess } = useContext(userContext);
  console.log(logSuccess);
  useEffect(() => {
    if (logSuccess) navigate("/");
  }, [logSuccess]);
  let message;

  return (
    <Contain>
      <Wrapper>
        <Title>Войти в почту</Title>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            if (!email || !password) {
            }
            setIsSubmitting(true);
            loginUser(email, password)
              .then((response) => {
                navigate("/");
              })
              .catch((error) => {
                console.log(error.message);
                Toastify({
                  text: error.message,
                  className: "error",
                  style: {
                    background:
                      "linear-gradient(to right, rgb(71, 22, 22), red)",
                  },
                }).showToast();
              })
              .finally(() => setIsSubmitting(false));
          }}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="Электронная почта"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            autoComplete="password"
            placeholder="Пароль"
          />
          {logSuccess ? <></> : <p style={{ color: "red" }}>{errorMSG}</p>}

          <Button type="submit">Войти</Button>
          <Link>Забыли пароль?</Link>
          {/* <button onClick={navigate("/register")}>Зарегистрироваться</button> */}
        </Form>
      </Wrapper>
    </Contain>
  );
};

export default LoginModalPage;
