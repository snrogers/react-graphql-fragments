import { FC } from "react";
import { IonButton, IonContent, IonSpinner, IonToast, useIonToast } from "@ionic/react";

import { useKillModalKillGuestMutation } from "./KillModalContent.graphql.generated";

export type KillModalContentProps = {
  personId: string;
  dismissModal: () => void;
};
export const KillModalContent: FC<KillModalContentProps> = (props) => {
  const { dismissModal, personId } = props;

  const [presentToast] = useIonToast();
  const toastSuccess = () => presentToast("🔪🔪🔪 Murder complete!", 1000);
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
    <IonContent>
      <h1>KILL this Guest?!</h1>
      <IonButton onClick={() => killGuest()}>
        {loading && <IonSpinner></IonSpinner>}
        Now!
      </IonButton>
      <IonToast isOpen={loading} message={"💀💀💀 Murder in progress..."} />
    </IonContent>
  );
};
