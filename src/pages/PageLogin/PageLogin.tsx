import React, { useState } from 'react';
import './PageLogin.scss';
import { Navigate } from 'react-router-dom';
import { APIData } from '../../redux/services/APIDataProcessing';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { TypeInput } from '../../redux/services/GlobalFunctions';

const PageLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [serverText, setServerText] = useState<string | null>(null);

  if (localStorage.getItem('tokenSamokat')) {
    return <Navigate to="/" />;
  }

  return (
    <div className="page-login">
      <form
        className="page-login__form"
        onSubmit={(e) => {
          e.preventDefault();
          APIData.login({ email: emailLogin, password: passwordLogin, setServerText });
        }}
      >
        <Input placeholder="Email" name="email" onChange={(e: TypeInput) => setEmailLogin(e.target.value)} />
        <Input
          placeholder="Пароль"
          type="password"
          onChange={(e: TypeInput) => setPasswordLogin(e.target.value)}
        />
        <Button text="Войти" />
      </form>
      {/* <form
        className="page-login__form"
        onSubmit={(e) => {
          e.preventDefault();
          APIData.register({ username, password, email, setServerText });
        }}
      >
         <Input
          placeholder="E-mail"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="page-login__input"
        />
        <Input
          placeholder="Логин"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          className="page-login__input"
        />
        <Input
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="page-login__input"
        />
        <Button type="submit">OK</Button> 
      </form> */}
      {serverText ? <p dangerouslySetInnerHTML={{ __html: serverText }}></p> : null}
    </div>
  );
};

export default PageLogin;
