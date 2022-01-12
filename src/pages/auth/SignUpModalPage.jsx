import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Toastify from 'toastify-js';
import { userContext } from '../../context/UserContext';

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
  flex-wrap: wrap;
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

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #00BBB4;
  color: white;
  cursor: pointer;
  text-align: center;

`;
const SignUpModalPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {signUpUser, logSuccess, errorMSG} = useContext(userContext)
    useEffect(() => {
        if (logSuccess) navigate("/")
    }, [logSuccess])
    return (
        <Contain>
            <Wrapper>
                <Title>Регистрация</Title>
                <Form
                onSubmit={async (e) => {
                    e.preventDefault();

                    if (!email || !password){

                    }
                    setIsSubmitting(true);
                    signUpUser(email, password)
                    .then((response) => {})
                    .catch((error) => {
                        console.log(error.message);
                        Toastify({
                            text: error.message,
                            className: "error",
                            // style: {
                            //     background: 

                            // }
                        }).showToast()
                    })
                    .finally(() => setIsSubmitting(false))
                }}
                >
                    <Input
                    placeholder="Электронная почта"
                    name="Электронная почта"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                    placeholder="Пароль"
                    name="Пароль"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {logSuccess ? <></> : <p style={{color: "red"}}>{errorMSG}</p>}
                    <Agreement>
                    Создавая учетную запись, я даю согласие на обработку мои личныe
                    данные в соответствии с <b>ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</b>
                    </Agreement>
                    <Button type="submit">Войти</Button>
                </Form>
            </Wrapper>
        </Contain>
    );
};

export default SignUpModalPage;