import DoctorForm from "../DoctorGen/DoctorGen";
import styles from "./DoctorList.module.css";

export default function DoctorList({
  doctors,
  doctorsName,
  doctorsSpecialization,
  selectDoctorId,
}) {
  const filterDoc = doctors.filter((doctor) => {
    if (
      doctorsName &&
      typeof doctorsName === "string" &&
      doctor.name.toLowerCase().includes(doctorsName.toLowerCase())
    ) {
      return true;
    }
    if (
      doctorsSpecialization &&
      typeof doctorsSpecialization === "string" &&
      doctor.specialization
        .toLowerCase()
        .includes(doctorsSpecialization.toLowerCase())
    ) {
      return true;
    }
    return false;
  });

  return (
    <div className={styles.box}>
      <h3>LIST DOCTORS</h3>
      <DoctorForm
        doctorsName={doctorsName}
        doctorsSpecialization={doctorsSpecialization}
        selectDoctorId={selectDoctorId}
      />

      <ul>
        {filterDoc.map((doctor) => (
          <li key={doctor.id}>
            <p>{doctor.name}</p>
            <p>Specialization: {doctor.specialization}</p>
            <p>Phone: {doctor.phone}</p>
            <img
              src={doctor.logo}
              alt="doctorLogo"
              className={styles.logoDoctor}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
