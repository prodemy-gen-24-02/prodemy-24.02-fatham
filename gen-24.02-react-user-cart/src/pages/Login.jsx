import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { setUser } from '../store/actions/Actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(5).max(32).required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { user } = res.data;
        dispatch(setUser(user));
        navigate("/home");
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mx-auto mt-24 px-4 py-8">
      <h1 className="text-center font-bold text-2xl mb-4">Login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
            {...register("email")}
            id="email"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm focus:outline-sky-200"
            {...register("password")}
            id="password"
            type="password"
          />
          <p className="text-red-500">{errors.password?.message}</p>
        </div>
        <button className="rounded-lg bg-sky-400 p-2 text-white w-full" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
