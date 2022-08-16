import React from "react";
import AppCard from "../AppCard";

import "./ListOfApps.css";

export const ListOfApps = ({ apps }) => {
  return (
    <div className="grid-apps">
      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
  );
};
