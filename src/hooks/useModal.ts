import { useState } from "react";

const useModal = () => {
  const [openedModal, setOpenedModal] = useState<React.ReactNode>(null);
  const openModal = (Component: React.ReactNode) => {
    setOpenedModal(Component);
  };
  const closeModal = () => {
    setOpenedModal(null);
  };
  return { openedModal, openModal, closeModal };
};

export default useModal;
