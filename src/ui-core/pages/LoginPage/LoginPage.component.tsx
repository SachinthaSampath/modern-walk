import React, { useRef } from "react";
import { useUserContext } from "../../../contexts";
import { UsersAPI } from "../../../services";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageProps } from "./LoginPageProps";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "../../../ui-core";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui-core";
import { Input } from "../../../ui-core";

//define schema for the form
const loginSchema = z.object({
  username: z.string().min(1, {
    message: "Username cannot be empty."
  }),
  password: z.string().min(1, {
    message: "Password cannot be empty."
  }),
});

const LoginPage: React.FC<LoginPageProps> = (): React.JSX.Element => {
  //remove saved user from the local storage
  localStorage.removeItem("user");

  //use contexts with custom hooks
  const { setUser } = useUserContext();

  //useRef to hold reference to input elements
  const usernnameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  //navigation
  const navigate = useNavigate();

  //use reqct query mutation for login
  const loginUserMutation = useMutation({
    mutationFn: UsersAPI.seachUser,

    onSuccess: (data, variables, context) => {
      //variables - arguments send by mutate() call
      //console.log(variables);

      //validate login on query success
      if (data.length) {
        let valid_user = data[0];
        //login success
        showValidLogin();
        //set user details
        setUser({
          email: valid_user.email,
          name: valid_user.name,
          username: valid_user.username,
          isLoggedIn: true,
        });

        //store in local storage **
        localStorage.setItem("user", JSON.stringify(valid_user));

        navigate("/");
      } else {
        //login fail
        showInvalidLogin();
      }
    },
  });

  //function to handle form submission
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();

    //get values from input fields
    let uname = usernnameRef.current?.value || "";
    let password = passwordRef.current?.value || "";

    //validate username
    if (!uname.trim()) {
      // alert("Please enter valid username!");
      let el = document.getElementById("uname");
      el?.focus();
      return;
    }

    //validate password
    if (!password) {
      // alert("Please enter valid password!");
      let el = document.getElementById("psw");
      el?.focus();
      return;
    }
  };

  //show invalid login status
  const showInvalidLogin = () => {
    alert("Invalid credentials!");
    let el = document.getElementById("uname") as HTMLInputElement;
    el?.focus();
    el?.select();
  };

  //show valid login status
  const showValidLogin = () => {
    // alert("Login success!");
    //save login status
    window.localStorage.loggedIn = true;
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    //call react query mutation with parameters
    loginUserMutation.mutate({
      username: values.username,
      password: values.password,
    });
  }

  return (
    <>
      <div className="flex h-screen flex-row items-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            id="form-login"
            className="mx-auto space-y-4 rounded-xl p-6 shadow-lg md:w-1/2 xl:w-1/3 "
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
                    py-1 text-sm placeholder-slate-400 shadow-sm
                    focus:border-sky-500 
                    focus:outline-none focus:ring-1 focus:ring-sky-500"
                      type="text"
                      id="uname"
                      placeholder="Username"
                      autoFocus
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3
                       py-1 text-sm placeholder-slate-400 shadow-sm
                       focus:border-sky-500 
                       focus:outline-none focus:ring-1 focus:ring-sky-500"
                      type="password"
                      id="psw"
                      placeholder="Password"
                      autoFocus
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant={"primary"}
              name="login"
              id="login"
              value="Login"
              className="mt-3 w-full rounded-full"
              type="submit"
            >
              Login
            </Button>
            <Button
              variant={"secondary"}
              type="button"
              className="mt-3 w-full rounded-full"
            >
              <Link to="/signup">SignUp</Link>
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
