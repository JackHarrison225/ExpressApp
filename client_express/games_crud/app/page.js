"use client";
import { useEffect, useState } from "react";
import { ApiClient } from "@/utils/apiclient";
import Landing from "./landing/page";
import Login from "./login/page";

export default function Home() {

  const [token, setToken] = useState(null);
  const client = new ApiClient(() => token, () => logout())

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
   <div>
      {
        token ? (
          <Landing
          client ={client}/>
        ) : (
          <Login loggedIn={(token) => login(token)} client={client}/>
        )
      }
   </div>
  );
}