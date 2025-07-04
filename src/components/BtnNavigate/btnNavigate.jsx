import { useNavigate } from "react-router-dom";
import "./styles.css";

// Componente para la navegación a los productos, separados por Café, Ajos y Extras

export const btnNavigate = () => {
  const navigate = useNavigate();

  const handleCoffee = () => {
    navigate("/categoria/cafe");
  };

  const handleGarlic = () => {
    navigate("/categoria/ajo");
  };

  const handleExtra = () => {
    navigate("/categoria/extra");
  };

  return (
    <>
      <div className="Container_Btns">
        <button className="btnStyles btnCafe" onClick={handleCoffee}>
          Cafés
        </button>
        <button className="btnStyles btnAjo" onClick={handleGarlic}>
          Ajos
        </button>
        <button className="btnStyles btnExtra" onClick={handleExtra}>
          Extras
        </button>
      </div>
    </>
  );
};

export default btnNavigate;
