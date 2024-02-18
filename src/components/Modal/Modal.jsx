import styles from "./Modal.module.css";
import { IoMdClose } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Modal({
  isModalOpen,
  openModal,
  modalPosition,
  children,
}) {
  return (
    <div
      className={`${styles.modalWrap} ${isModalOpen && styles.open} ${
        modalPosition && styles[modalPosition]
      }`}
      onClick={() => openModal()}
    >
      <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
        <IconContext.Provider
          value={{
            color: "black",
            size: "25px",
            className: `icon ${styles.icon}`,
          }}
        >
          <IoMdClose onClick={() => openModal()} />
        </IconContext.Provider>

        {children}
      </div>
    </div>
  );
}
