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
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(false);
  const [filteredApps, setFilteredApps] = useState([]);

  const handleSearch = (search) => {
    if (search === "") {
      setFiltered(false);
    } else {
      const searchedApps = apps.filter((app) => {
        return app.appname.toLowerCase().includes(search.toLowerCase());
      });
      setSearch(search);
      setFilteredApps(searchedApps);
      setFiltered(true);
    }
  };

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
    <div className="app-main">
      <Navbar>
        <FormSearchApp handleSearch={handleSearch} />
      </Navbar>

      <main role="main" className="container">
        {!filtered ? (
          <SelectCategory setCategory={setCategory} />
        ) : (
          <div className="text-center p-5">
            <h3>Search: {search}</h3>
          </div>
        )}

        {loading && (
          <div className="container text-center mt-5">Loading...</div>
        )}
        {!apps.length > 0 && !loading ? (
          <div className="container text-center mt-5">No apps found</div>
        ) : filtered ? (
          <ListOfApps apps={filteredApps} />
        ) : (
          <ListOfApps apps={apps} />
        )}
      </main>
      <footer> Jose Galdamez | Fullstack developer </footer>
    </div>
  );
};
