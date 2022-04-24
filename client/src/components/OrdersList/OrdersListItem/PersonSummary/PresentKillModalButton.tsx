import React, { FC } from "react";
import { IonButton, useIonModal } from "@ionic/react";

import { KillModalContent } from "./KillModalContent";
import { withApollo } from "../../../../Effects";

type PresentKillModalButtonProps = {
  personId: string;
};
const PresentKillModalButton: FC<PresentKillModalButtonProps> = (props) => {
  const { personId } = props;

  const [presentKillModal] = useIonModal(withApollo(KillModalContent));

  return (
    <IonButton onClick={() => presentKillModal()} expand={"full"}>
      🪦🪦 Kill Guest 🔪🩸
    </IonButton>
  );
};

export default PresentKillModalButton;
