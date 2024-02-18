import React, { useEffect, useState } from "react";
import {
  doctors,
  sortDoctors,
  countResult,
  findDoctor,
} from "../../share/list";
import styles from "./App.module.css";
import Search from "../Search/Search";
import { LocalContext } from "../../share/context";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DoctorList from "../DoctorList/DoctorList";
import Modal from "../Modal/Modal";
import Layout from "../Layout/Layout";
import Auth from "../Auth/Auth";
import LayoutMain from "../LayoutMain/LayoutMain";

export default function App() {
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [isAZ, setIsAZ] = useState(true);
  const [doctorList, setDoctorList] = useState([]);
  const [isModalOpen, setModal] = useState(false);
  const [isModalOpenApp, setModalOpenApp] = useState(false);
  const [modalContent, setModalContent] = useState("contact");

  const [isDark, setIsDark] = useState(false);

  const doctorsName = findDoctor(search, false);
  const doctorsSpecialization = findDoctor(search, true);

  const changeSort = (isAZ, name) => {
    setSortColumn(name);
    setIsAZ(isAZ);
  };

  const getSearch = (value) => {
    setSearch(value);
  };

  const openModal = (content = "contact") => {
    setModal((prev) => !prev);
    switch (content) {
      case "auth":
        setModalContent("auth");
        break;
      default:
        setModalContent("contact");
    }
  };

  const openModalApp = () => {
    setModalOpenApp((prev) => !prev);
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    const theme = isDark ? "light" : "dark";
    document.body.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    setDoctorList(doctors);
  }, []);

  useEffect(() => {
    if (sortColumn !== "") {
      sortDoctors(isAZ, sortColumn, search);
    } else {
      countResult(search);
    }
  }, [sortColumn, isAZ, search]);

  useEffect(() => {
    document.body.getAttribute("data-theme", `${isDark ? "dark" : ""}`);
  }, [isDark]);

  const [selectDoctorId, setSelectDoctorId] = useState(null);

  const handleSelectDoctor = (doctorId) => {
    setSelectDoctorId(doctorId);
  };

  const [isLogin, setIsLogin] = useState(false);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const changeAuth = (auth) => {
    setIsAuth(auth);
  };

  console.log(toggleTheme);
  console.log(document.body.getAttribute, "data-theme");

  console.log(handleSelectDoctor, "handleSelectDoctor");

  console.log(doctorList, "doctor list");

  function Button({ theme, onClick, className, children }) {
    const buttonStyle = {
      backgroundColor: theme === "dark" ? "#e9febe" : "",
      color: theme === "dark" ? "#8a2be2" : "",
    };

    return (
      <button
        onClick={onClick}
        className={`${className} ${theme === "dark" ? styles.dark : ""} btn`}
        style={buttonStyle}
      >
        {children}
      </button>
    );
  }

  return (
    <>
      <LayoutMain header={<Header />} />

      {/* <Header /> */}
      <div className="container">
        <div className={styles.wrapBtn}>
          <Button onClick={() => openModal("contact")} className={styles.btn}>
            Зареєструватися
          </Button>
          <Button onClick={openModalApp} className={styles.btn}>
            Записатися на прийом до лікаря
          </Button>
        </div>

        <Search getSearch={getSearch} />

        <Layout doctors={doctors} />
      </div>

      {/* <Footer /> */}

      <Modal
        isModalOpen={isModalOpen}
        openModal={openModal}
        modalPosition={modalContent !== "contact" && "right"}
      >
        {modalContent === "contact" ? <span></span> : <h2>Auth Form</h2>}

        <div className={styles.wrap} key="d1">
          <LocalContext.Provider value={{ isAuth, setIsLogin }}>
            <Auth isLogin={isLogin} changeAuth={changeAuth} />
          </LocalContext.Provider>
        </div>
      </Modal>

      <Modal isModalOpen={isModalOpenApp} openModal={openModalApp}>
        <div className={styles.wrap.doc} key="d2*n">
          <LocalContext.Provider value={{ changeSort, sortColumn, isAZ }}>
            <DoctorList
              doctors={doctors}
              selectDoctorId={selectDoctorId}
              doctorsName={doctorsName}
              doctorsSpecialization={doctorsSpecialization}
            />
          </LocalContext.Provider>
        </div>
      </Modal>

      <LayoutMain footer={<Footer />} />
    </>
  );
}
