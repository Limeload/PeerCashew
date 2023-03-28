import React, { useState } from "react";
// import StatusBoard from "./StatusBoard";
import Profile from "./Profile";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import StatusBoard from "./StatusBoard";

function Dashboard({user, onLogIn, onLogOut}) {
  const [activeTab, setActiveTab] = useState("profile");

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
      <div>
          <NavigationBar user={user} onLogIn={onLogIn} onLogOut={onLogOut} />
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <div className="profile-tab"
          style={{
            backgroundColor: activeTab === "profile" ? "blanchedalmond" : "",
          }}
          onClick={() => handleClick("profile")}
        >
          Profile
        </div>
        <div className="status-tab"
          style={{
            backgroundColor: activeTab === "status" ? "blanchedalmond" : "",
          }}
          onClick={() => handleClick("status")}
        >
          Status Board
        </div>
      </div>
      <div className="tabs">
        {activeTab === "profile" ? <Profile /> : <StatusBoard user={user} />}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Dashboard;
