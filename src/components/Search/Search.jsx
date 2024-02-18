import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { doctors } from "../../share/list";
import styles from "./Search.module.css";

const specList = [
  "Terapevt",
  "Otorhinolaryngologist",
  "Ophthalmologist",
  "Hirurgist",
  "Pediatrician",
];

export default function Search({ getSearch }) {
  const [value, setValue] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState(null);
  const [docData, setDocData] = useState(doctors);
  const [specData, setSpecData] = useState(specList);

  const doctorChange = (id) => {
    const doctor = doctors.find((doctor) => doctor.id === id);

    if (doctor) {
      const spec = doctor.specialization;
      const arr = specList.filter((item) => item === spec);
      setSpecData(() => [...arr]);
      setSelectedSpecialization(null);
    }
  };

  const specChange = (specId) => {
    const filter = doctors.filter(
      (doctor) => doctor.specialization === specList[specId]
    );
    setDocData(() => [...filter]);
  };

  const handleSearch = () => {
    if (selectedDoctor) {
      getSearch(selectedDoctor.name);
    } else if (selectedSpecialization) {
      getSearch(selectedSpecialization.specialization);
    } else {
      getSearch(value.trim());
    }
    setValue("");
    setSelectedDoctor(null);
    setSelectedSpecialization(null);
  };

  const handleClear = () => {
    setValue("");
    setSelectedDoctor(null);
    setSelectedSpecialization(null);
    getSearch("");
  };

  return (
    <div className={styles.wrap}>
      <Form.Group controlId="doctorSelect" className={styles.searchWrap}>
        <Form.Control
          as="select"
          value={selectedDoctor ? selectedDoctor.id : ""}
          onChange={(e) => {
            const selectedId = e.target.value;
            const doctor = doctors.find((doc) => doc.id === selectedId);
            setSelectedDoctor(doctor);
            doctorChange(selectedId);
          }}
        >
          <option value="">Select Doctor</option>
          {docData.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group
        controlId="specializationSelect"
        className={styles.searchWrap}
      >
        <Form.Control
          as="select"
          value={selectedSpecialization ? selectedSpecialization.id : ""}
          onChange={(e) => {
            const selectedId = e.target.value;
            const specialization = specList[selectedId];
            setSelectedSpecialization({ specialization });
            specChange(selectedId);
          }}
        >
          <option value="">Select Specialization</option>
          {specData.map((specialization, index) => (
            <option key={index} value={index}>
              {specialization}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Button onClick={handleSearch}>Search</Button>

      <Button variant="danger" type="button" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
}
