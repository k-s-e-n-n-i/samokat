import React, { useState } from 'react';
import './PageLogin.scss';
import { Navigate } from 'react-router-dom';
import { APIData } from '../../redux/services/APIDataProcessing';

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
        {/* <Input
          placeholder="Email"
          name="email"
          onChange={(e) => setEmailLogin(e.target.value)}
          className="page-login__input"
        />
        <Input
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPasswordLogin(e.target.value)}
          className="page-login__input"
        />
        <Button type="submit">OK</Button> */}
      </form>
      <form
        className="page-login__form"
        onSubmit={(e) => {
          e.preventDefault();
          APIData.register({ username, password, email, setServerText });
        }}
      >
        {/* <Input
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
        <Button type="submit">OK</Button> */}
      </form>
      ,{serverText ? <p dangerouslySetInnerHTML={{ __html: serverText }}></p> : null}
    </div>
  );
};

export default PageLogin;
