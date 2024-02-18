import React, { useState } from "react";
import styles from "./Layout.module.css";

export default function Layout({ children, doctors }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [searchText, setSearchText] = useState("");

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredDoctors = searchText
    ? doctors.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
          doctor.specialization.toLowerCase().includes(searchText.toLowerCase())
      )
    : doctors;

  const currentDoctors = selectedDoctor
    ? doctors.filter((doctor) => doctor.id === selectedDoctor.id)
    : filteredDoctors.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDoctorSelect = () => {
    if (doctors.length > 0) {
      const firstDoctor = doctors[0];
      setSelectedDoctor(firstDoctor);
      setCurrentPage(1); // Перемикаємо на першу сторінку при виборі лікаря
    }
  };
  console.log(handleDoctorSelect);

  const getSearch = (text, page) => {
    setSearchText(text);
    setCurrentPage(page);
  };
  console.log(getSearch, "getSearch");

  return (
    <div>
      {children}

      <div className={styles.grid}>
        {currentDoctors.map((doctor) => (
          <div key={doctor.id} className={styles.borderDiv}>
            <p>{doctor.name}</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Phone: {doctor.phone}</p>
            <img
              src={doctor.logo}
              alt="doctorLogo"
              className={styles.logoDoctor}
            />
          </div>
        ))}
      </div>
      <div className={styles.wrapBox}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={styles.btn}
            >
              {page}
            </button>
          )
        )}
      </div>
    </div>
  );
}
