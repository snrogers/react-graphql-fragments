import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo";

import "./index.css";
import {IonApp} from "@ionic/react";

ReactDOM.render(
  <IonApp>
    <App />
  </IonApp>,
  document.getElementById("root")
);
