import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logIn } from "../redux/themeAppReducer";

const Container = styled.div`
  width: 100vw;
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch('https://sapiens-pro.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userName: username, password: password})
    });
    const canLogin = await response.json();
    dispatch(logIn({canLogin,username}))

    console.log(canLogin);
   
  };

  return (
    <Container>
      <Wrapper>
        <Form>
          <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="password"  type="password"  onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={handleClick}>LOGIN</Button>         
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;