import React, { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { SelectCategory } from "./components/SelectCategory";
import { ListOfApps } from "./components/ListOfApps";
import { FormSearchApp } from "./components/FormSearchApp";

import "./App.css";

export const App = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    setLoading(true);

    if (category === "All") {
      setLoading(true);
      const fetchData = async () => {
        const data = await fetch("http://localhost:8080/api/apps");
        const jsonData = await data.json();
        setApps(jsonData.apps);
        setLoading(false);
      };
      fetchData();
    } else {
      const fetchData = async () => {
        const data = await fetch(
          `http://localhost:8080/api/apps/category/${category}`
        );
        const jsonData = await data.json();
        setApps(jsonData.apps);
        setLoading(false);
      };
      fetchData();
    }
  }, [category]);

  return (
    <>
      <Navbar>
        <FormSearchApp />
      </Navbar>

      <main role="main" className="container">
        <SelectCategory setCategory={setCategory} />
        {loading && (
          <div className="container text-center mt-5">Loading...</div>
        )}
        {!apps.length > 0 && !loading ? (
          <div className="container text-center mt-5">No apps found</div>
        ) : (
          <ListOfApps apps={apps} />
        )}
      </main>
    </>
  );
};
