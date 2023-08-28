import React from "react";
import { images } from "../../utils/images";
import { useState } from "react";
import { loginCheck, setNewUser } from "../../utils/fetchData";

const Login = ({ setEmail, setMode, setLoggedIn, loginTimer }) => {
  const [signInMode, setSignInMode] = useState(true);
  const postSignUp = (e) => {
    const data = {};
    e.preventDefault();
    e.target.form.childNodes.forEach((node) => {
      if (
        node.id === "email" ||
        node.id === "password" ||
        node.id === "password_confirmation"
      ) {
        data[node.id] = node.value;
      }
    });

    // validation
    if (data.password !== data.password_confirmation) {
      console.log("passwords do not match");
    } else {
      setNewUser(data);
      setLoggedIn(true);
      loginTimer();
      setMode("game");
      setEmail(`Account created, ${e.target.form.childNodes[0].value}!`);
    }
  };
  const postSignIn = async (e) => {
    const data = {};
    e.preventDefault();
    console.log(e.target.form.childNodes);
    e.target.form.childNodes.forEach((node) => {
      if (node.id === "email" || node.id === "password") {
        data[node.id] = node.value;
      }
    });
    const check = await loginCheck(data);
    if (check) {
      setLoggedIn(true);
      loginTimer();
      setMode("game");
      setEmail(`Welcome, ${e.target.form.childNodes[0].value}!`);
    }
  };

  const login = (
    <form action="" method="post">
      <input type="email" name="" id="email" placeholder="paula@email.com" />
      <input type="password" name="" id="password" placeholder="Password" />
      <div>
        <input type="checkbox" name="" id="" />
        Remember me
      </div>
      <button
        onClick={(e) => {
          postSignIn(e);
        }}
        type="submit"
      >
        Sign In
      </button>
    </form>
  );

  const signup = (
    <form action="" method="post">
      <input type="email" name="" id="email" placeholder="maria@email.com" />
      <input type="password" name="" id="password" placeholder="Password" />
      <input
        type="password"
        name=""
        id="password_confirmation"
        placeholder="Confirm Password"
      />
      <div>
        <input type="checkbox" name="" id="" />
        Remember me
      </div>
      <button
        onClick={(e) => {
          postSignUp(e);
        }}
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );

  return (
    <div className="login">
      <img src={images.puzzleAssets.byte_right} alt="" />
      {signInMode ? login : signup}
      <div className="swap">
        <p
          onClick={() => {
            setSignInMode(!signInMode);
          }}
        >
          Switch to sign {signInMode ? "up" : "in"}
        </p>
      </div>
    </div>
  );
};

export default Login;
