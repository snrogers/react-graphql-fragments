import React, { FC } from "react";
import { IonButton, IonSpinner } from "@ionic/react";

import { useKillModalKillGuestMutation } from "./KillModalContent.graphql.generated";

type KillModalContentProps = {
  personId: string;
};
export const KillModalContent: FC<KillModalContentProps> = (props) => {
  const { personId } = props;

  const [killGuest, { data, loading, error }] = useKillModalKillGuestMutation({
    variables: { personId },
  });

  return (
    <>
      <h1>KILL this Guest?!</h1>
      { loading
        ? <IonSpinner>🪦 🪦</IonSpinner>
        : <IonButton>Now!</IonButton>
      }
    </>
  );
};
