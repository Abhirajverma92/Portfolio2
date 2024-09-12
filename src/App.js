// import React from "react"; //rfce //npm start -to start
// import LeftSideBar from "./Pages/LeftSideBar";
import TopBar from "./Pages/TopBar";
import Hero from "./Pages/Hero";
import MetaTags from "react-meta-tags";

function App() {
  return (
    <div>
      <MetaTags>
        <meta name="viewport" content="width=1440px, initial-scale=1.0" />
      </MetaTags>

      
      <TopBar />
      <Hero />
    </div>
  );
}

export default App;
