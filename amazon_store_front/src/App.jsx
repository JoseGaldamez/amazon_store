import React from "react";

import { Navbar } from "./components/Navbar";
import "./App.css";
import { SelectCategory } from "./components/SelectCategory";
import { ListOfApps } from "./components/ListOfApps";

export const App = () => {
  return (
    <>
      <Navbar />

      <main role="main" className="container">
        <SelectCategory />
        <ListOfApps />
      </main>
    </>
  );
};
