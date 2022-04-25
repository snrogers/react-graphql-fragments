import { useIonModal } from "@ionic/react";

import { KillModalContentProps, KillModalContent } from "./KillModalContent";

export { KillModalContent };

export const useKillModal = (
  props: Omit<KillModalContentProps, "dismissModal">
) => {
  const [presentKillModal, dismissKillModal] = useIonModal(KillModalContent, {
    dismissModal: () => dismissKillModal(),
    ...props,
  });

  return [presentKillModal, dismissKillModal];
};
