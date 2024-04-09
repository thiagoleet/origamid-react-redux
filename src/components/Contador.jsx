import { useDispatch, useSelector } from "react-redux";
import { sum } from "../store/slices/contador";

const Contador = () => {
  const dispatch = useDispatch();
  const contador = useSelector((state) => state.contador);

  return (
    <div className="field is-grouped">
      <div className="control mx-auto pt-6">
        <button onClick={() => dispatch(sum(5))} className="button is-info">
          Valor: {contador}
        </button>
      </div>
    </div>
  );
};

export default Contador;
