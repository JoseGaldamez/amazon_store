import React, { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { SelectCategory } from "./components/SelectCategory";
import { ListOfApps } from "./components/ListOfApps";
import { FormSearchApp } from "./components/FormSearchApp";

import "./App.css";

export const App = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/api/apps");
      const jsonData = await data.json();
      setApps(jsonData.apps);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar>
        <FormSearchApp />
      </Navbar>

      <main role="main" className="container">
        <SelectCategory />
        <ListOfApps apps={apps} />
      </main>
    </>
  );
};
