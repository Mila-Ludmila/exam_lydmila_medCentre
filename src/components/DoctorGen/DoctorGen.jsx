import { useCallback } from "react";
import { useState } from "react";
import styles from "./DoctorGen.module.css";
import { Button } from "react-bootstrap";

const specializationList = [
  "Terapevt",
  "Otorhinolaryngologist",
  "Ophthalmologist",
  "Hirurgist",
  "Pediatrician",
];
export default function DoctorForm({
  doctors,
  doctorsName,
  doctorsSpecialization,
  selectDoctorId,
}) {
  const [doctorsData, setDoctorsData] = useState(doctorsName);
  const [specData, setSpecData] = useState(specializationList);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectDay, setSelectDay] = useState("");
  const [selectHour, setSelectHour] = useState("");

  const doctorChange = (id) => {
    const doctor = doctorsName.find((doctor) => doctor.id === id);

    if (doctor) {
      const spec = doctor.specialization;
      const arr = specializationList.filter((item) => item === spec);
      setSpecData(() => [...arr]);
    }
  };

  const specChange = (spec) => {
    console.log("zzzz");
    const filter = doctorsName.filter(
      (doctor) => doctor.specialization === spec
    );
    console.log(spec);
    setDoctorsData(() => [...filter]);
  };

  const handleChangeYear = (value) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(value);
    setCurrentDate(newDate);
  };

  const handleChangeMonth = (value) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(value);
    setCurrentDate(newDate);
    setSelectHour("");
  };

  const handleChangeDay = (value) => {
    const newDate = new Date(currentDate);
    newDate.setDate(value);
    setCurrentDate(newDate);
    setSelectDay(value);
    setSelectHour("");
  };

  const handleChangeHours = useCallback(
    (e) => {
      setSelectHour(e.target.value);
    },
    [setSelectHour]
  );

  const isDateOccup = (value) => {
    return value === selectDay;
  };

  const isTimeSlotOccupied = (value) => {
    return value === selectHour;
  };

  const handleSaveAppointment = () => {
    if (doctors && selectDoctorId) {
      const selectDoctor = doctors.find(
        (doctor) => doctor.id === selectDoctorId
      );

      if (selectDoctor) {
        const appointment = {
          doctorName: selectDoctor.name,
          doctorSpec: selectDoctor.specialization,
          date: currentDate.toISOString(),
          time: selectHour,
        };

        const serializedAppointment = JSON.stringify(appointment);
        localStorage.setItem("appointment", serializedAppointment);
      }
    } else {
      console.error("doctors or selectDoctorId is undefined");
    }
  };

  console.log(selectDoctorId, "hhh");

  console.log(handleSaveAppointment, "handle");

  return (
    <div className={`container ${styles.flex}`}>
      <div>
        <select
          name="doctor"
          id="doctor"
          onChange={(e) => doctorChange(e.target.value)}
        >
          {doctorsData.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          onChange={(e) => specChange(e.target.value)}
          name="specialization"
          id="specialization"
        >
          {specData.map((item) => (
            <option key={item} value={item} defaultValue={item === specData[0]}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          name="year"
          id="year"
          onChange={(e) => handleChangeYear(e.target.value)}
        >
          <option value="">Select a year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
        </select>
      </div>

      <div>
        <select
          name="month"
          id="month"
          onChange={(e) => handleChangeMonth(e.target.value)}
        >
          <option value="">Select a month</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
      </div>

      <div>
        <select
          name="day"
          id="day"
          onChange={(e) => handleChangeDay(e.target.value)}
        >
          <option value="">Select a day</option>
          {currentDate.getMonth() === 1
            ? Array.from(
                {
                  length: new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth() + 1,
                    0
                  ).getDate(),
                },
                (_, index) => {
                  const day = index + 1;
                  const isOccupied = isDateOccup(day);
                  return (
                    <option
                      key={`day-${day}`}
                      value={day}
                      disabled={isOccupied}
                    >
                      {day}
                      {isOccupied ? " (occupied)" : ""}
                    </option>
                  );
                }
              )
            : Array.from({ length: 31 }, (_, index) => {
                const day = index + 1;
                const isOccupied = isDateOccup(day);
                return (
                  <option key={`day-${day}`} value={day} disabled={isOccupied}>
                    {day}
                    {isOccupied ? " (occupied)" : ""}
                  </option>
                );
              })}
        </select>
      </div>

      <div>
        <select name="hours" id="hours" onChange={(e) => handleChangeHours(e)}>
          <option value="">Select an hour</option>
          {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((hour) => {
            const isOccupied = isTimeSlotOccupied(hour);
            return (
              <option key={`hour-${hour}`} value={hour} disabled={isOccupied}>
                {hour}:00 {hour < 12 ? "AM" : "PM"}
                {isOccupied ? " (occupied)" : ""}
              </option>
            );
          })}
        </select>
      </div>

      <Button
        variant="primary"
        type="submit"
        className={styles.btn}
        onClick={() => handleSaveAppointment(selectDoctorId)}
      >
        Appointment
      </Button>
    </div>
  );
}
