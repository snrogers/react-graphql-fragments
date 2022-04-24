import { useState } from "react";

import OrdersView from "./views/OrdersView";
import { withApollo, withAppEffects } from "./Effects";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

// /* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
//
// /* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

// import "./App.css";
import { IonContent, IonPage } from "@ionic/react";

function App() {
  return (
    <IonPage>
      <IonContent>
        <div className="App">
          <OrdersView />
        </div>
      </IonContent>
    </IonPage>
  );
}

export default withApollo(App);
