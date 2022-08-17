import React, { useState } from "react";
import AppCard from "../AppCard";
import { AppModal } from "../AppModal";

import "./ListOfApps.css";

export const ListOfApps = ({ apps }) => {
  const [showModal, setShowModal] = useState(false);
  const [seletedApp, setSelectedApp] = useState({});

  const handleShowModal = (show, app) => {
    setSelectedApp(app);
    setShowModal(show);
  };

  return (
    <>
      <div className="grid-apps">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} handleShowModal={handleShowModal} />
        ))}
        {showModal && <AppModal app={seletedApp} setShowModal={setShowModal} />}
      </div>
    </>
  );
};
