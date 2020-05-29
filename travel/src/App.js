import React from "react";
import Layout from "./layout/Layout";
import Tour from "./components/Tour";
import Bookmark from "./components/Bookmark";
import ReviewOverview from "./components/ReviewOverview";
import "./App.css";

function App() {
  return (
    <Layout>
      <Tour />
      <Bookmark />
      <ReviewOverview />
    </Layout>
  );
}

export default App;
