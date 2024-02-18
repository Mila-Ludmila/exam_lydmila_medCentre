import { GlobalContext } from "../../share/context";
import Form from "react-bootstrap/Form";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import styles from "./Theme.module.css";
import { useContext } from "react";

export default function Theme(props) {
  const { theme, toggleTheme } = useContext(GlobalContext);
  return (
    <div className={styles.theme}>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch-1"
          label={theme === "dark" ? <MdOutlineLightMode /> : <MdLightMode />}
          onClick={toggleTheme}
        />
      </Form>
    </div>
  );
}
