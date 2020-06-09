import React from "react";
import Layout from "./layout/Layout";
import Tour from "./components/Tour";
import Bookmark from "./components/Bookmark";
import ReviewOverview from "./components/ReviewOverview";
import "./App.css";
import { IonApp, IonContent } from "@ionic/react";
function App() {
  return (
    <IonApp>
      <IonContent>
        <Layout>
          <Tour />
          <Bookmark />
          <ReviewOverview />
        </Layout>
      </IonContent>
    </IonApp>
  );
}

export default App;
