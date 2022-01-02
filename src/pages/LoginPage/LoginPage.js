import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Clayful from "clayful/client-js";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var Customer = Clayful.Customer;
    var payload = {
      email,
      password,
    };

    Customer.authenticate(payload, function (err, result) {
      if (err) {
        // Error case
        console.log(err.code);
        alert("이메일이나 비밀번호가 일치하지 않습니다.");
        return;
      }
      var data = result.data;
      localStorage.setItem("customerUid", data.customer);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
      isAuthenticated();
      console.log(data);
    });
  };

  return (
    <div className="pageWrapper">
      <div className="auth-wrapper">
        <h1>로그인</h1>
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
          <p>
            Apple ID는 iTunes, App Store, iCloud에 로그인할 때 사용하는 이메일
            주소입니다.
          </p>
          <button type="submit">로그인</button>
          <Link
            to="/register"
            style={{ color: "grey", textDecoration: "none" }}
          >
            Apple ID가 없으신가요? 지금 생성
          </Link>
        </form>
      </div>
    </div>
  );
};
