import React from "react";
import { images } from "../../utils/images";
import { useState } from "react";

const Login = () => {
  const [mode, setMode] = useState(true);
  const login = (
    <form action="" method="post">
      <input type="email" name="" id="" placeholder="maria@email.com" />
      <input type="password" name="" id="" placeholder="Password" />
      <div>
        <input type="checkbox" name="" id="" />
        Remember me
      </div>
      <button type="submit">Sign In</button>
    </form>
  );

  const signup = (
    <form action="" method="post">
      <input type="email" name="" id="" placeholder="maria@email.com" />
      <input type="password" name="" id="" placeholder="Password" />
      <input type="password" name="" id="" placeholder="Confirm Password" />
      <div>
        <input type="checkbox" name="" id="" />
        Remember me
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );

  console.log(login);
  return (
    <div className="login">
      <img src={images.puzzleAssets.byte_right} alt="" />
      {mode ? login : signup}
      <div>
        <p
          onClick={() => {
            setMode(!mode);
          }}
        >
          Switch to sign up
        </p>
      </div>
    </div>
  );
};

export default Login;
