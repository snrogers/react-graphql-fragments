import React, { FC } from "react";
import { IonButton } from "@ionic/react";

import { useKillModal } from "./KillModalContent";

type PresentKillModalButtonProps = {
  personId: string;
};
const PresentKillModalButton: FC<PresentKillModalButtonProps> = (props) => {
  const { personId } = props;

  const [presentKillModal] = useKillModal({ personId });

  return (
    <IonButton onClick={() => presentKillModal()} expand={"full"}>
      🪦🪦 Kill Guest 🔪🩸
    </IonButton>
  );
};

export default PresentKillModalButton;
