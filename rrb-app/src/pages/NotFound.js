import { useNavigate } from "react-router-dom";
import "../styles/NotFound.css";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <p className="NotFound__text">Error 404</p>
      <p className="NotFound__text">Página no encontrada</p>

      <button className="NotFound__button" onClick={() => navigate("/")}>
        Regresar al inicio
      </button>
    </div>
  );
}

export { NotFound };
