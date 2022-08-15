import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <>
      <Header title="Image Generator" />
      <Search />
      <Footer />
    </>
  );
};

export default App;
