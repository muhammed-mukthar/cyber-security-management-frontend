import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./dashboard.css"; // Import CSS file

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/userIdSlice";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        { email, password }
      );
      setLoading(false);
      toast.success("Logged in Successfully");
      localStorage.setItem("authToken", true);
      localStorage.setItem("accessToken", response.data?.token?.accessToken);
      if (response.data.user) {
        dispatch(setUserData(response.data.user));
      }
      navigate("/");
    } catch (err) {
      setLoading(false);

      console.log(err, "err");
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={error !== ""}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Login</Typography>

        <TextField
          label="Email"
          type="email"
          required
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="Password"
          type="password"
          required
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
          disabled={loading}
        >
          Login
        </Button>
        <Typography mt={2}>
          Don't have an account ? <Link to="/register">Register</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;
