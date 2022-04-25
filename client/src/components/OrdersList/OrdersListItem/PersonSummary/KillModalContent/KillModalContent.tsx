import React, { FC } from "react";
import { IonButton, IonSpinner, useIonToast } from "@ionic/react";

import { useKillModalKillGuestMutation } from "./KillModalContent.graphql.generated";

export type KillModalContentProps = {
  personId: string;
  dismissModal: () => void;
};
export const KillModalContent: FC<KillModalContentProps> = (props) => {
  const { dismissModal, personId } = props;

  const [presentToast] = useIonToast();
  const toastSuccess = () => presentToast("🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪🔪", 1000);
  const toastError = (message = "COULD NOT KILL") =>
    presentToast(message, 1000);

  const [killGuest, { loading }] = useKillModalKillGuestMutation({
    variables: { personId },
    onCompleted: () => {
      dismissModal();
      toastSuccess();
    },
    onError: (error) => {
      dismissModal();
      toastError();
    },
  });

  return (
    <>
      <h1>KILL this Guest?!</h1>
      <IonButton onClick={() => killGuest()}>
        {loading && <IonSpinner></IonSpinner>}
        Now!
      </IonButton>
    </>
  );
};
