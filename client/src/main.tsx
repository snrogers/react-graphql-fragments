import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { IonApp } from "@ionic/react";

import App from "./App";
import { apolloClient } from "./apollo";

import "./index.css";

ReactDOM.render(
  <IonApp>
    <App />
  </IonApp>,
  document.getElementById("root")
);
