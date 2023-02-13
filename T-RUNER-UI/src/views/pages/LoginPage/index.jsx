import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../services/auth/authService";
import { authActions } from "../../../slices/authSlice";
import TRunner from "../../../views/components/Icons/TRunner";
import TRunnerLogo from "../../../views/components/Icons/TRunner-logo";
import TmaLogo from "../../../views/components/Icons/tma-logo";
import TrunnerLogo from "../../../views/components/Icons/t-runner-logo";
import SlashIcon from "../../../views/components/Icons/icon-slash";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    green: {
      main: "bg-ct4-green-neon",
      contrastText: "#333",
    },
  },
});

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isError = false;//useSelector((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHide, setIsHide] = useState(false);

  //events
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setIsHide(!isHide);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "tuananh@gmail.com" && password === "12345678") {
      const isLogin = await login(email, password);
      const userProfile = {
        email: email,
        name: "Tuan Anh",
        avatar:
          "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128",
        admin: false,
      };
      isLogin
        ? dispatch(authActions.login(userProfile))
        : dispatch(authActions.loginFail());
    } else if (email === "ct4admin@gmail.com" && password === "12345678") {
      const isLogin = await login(email, password);
      const userProfile = {
        email: email,
        name: "CT4 Admin",
        avatar:
          "https://thumbs.dreamstime.com/b/admin-icon-vector-male-user-person-profile-avatar-gear-cogwheel-settings-configuration-flat-color-glyph-pictogram-150138136.jpg",
        admin: true,
      };
      isLogin
        ? dispatch(authActions.login(userProfile))
        : dispatch(authActions.loginFail());
    } else {
      dispatch(authActions.loginFail());
    }
  };

  return (
    <div className="w-full h-full text-center absolute bg-cover pt-30 font-tnr bg-ct4-dark">
      <div className="flex justify-center h-16 pb-3">
        <TrunnerLogo />
        <SlashIcon />
        <TmaLogo width="50" height="40" />
      </div>
      <div className="w-0.3 bg-white ml-0.35 h-400 p-7">
        <div className="grid gap-2">
          <label className="font-barlow text-ct4-dark text-3xl font-bold italic uppercase">
            Log In
          </label>
          {/* <div className="w-11 h-11 rounded-full bg-green-800">
            <i className="fas fa-lock text-4xl"/>
          </div> */}
        </div>
        <form onSubmit={handleSubmit}>
          <FormInput
            email={email}
            password={password}
            changeEmail={onChangeEmail}
            changePassword={onChangePassword}
            error={isError}
            isHide={isHide}
            onClick={handleClickShowPassword}
            isRegister={false}
          />
          <button
            type="submit"
            className="btn bg-ct4-green-neon my-6 font-barlow h-12 text-ct4-dark text-xl uppercase"
          >
            Log In
          </button>
          {isLoggedIn && <Navigate to="/dashboard" replace />}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
