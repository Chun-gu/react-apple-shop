import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Clayful from "clayful/client-js";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const Customer = Clayful.Customer;

    const payload = {
      email,
      password,
    };

    Customer.createMe(payload, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        return;
      }
      var data = result.data;
      console.log(data);
      navigate("/login");
    });
  };

  return (
    <div className="pageWrapper">
      <div className="auth-wrapper">
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleEmailChange}
            placeholder="Apple Id"
            type="email"
            name="email"
            value={email}
          />
          <input
            onChange={handlePasswordChange}
            placeholder="암호"
            type="password"
            name="password"
            minLength="8"
            value={password}
          />
          <button type="submit">회원가입</button>
          <Link to="/login" style={{ color: "grey", textDecoration: "none" }}>
            이미 Apple Id가 있다면? 지금 로그인
          </Link>
        </form>
      </div>
    </div>
  );
};
