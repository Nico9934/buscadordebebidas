import { Modal, Button, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

    

const ModalBebida = () => {
  
    const {handleModalClick, modal, receta, cargando} = useBebidas()

    console.log(receta)

    const mostrarIngredientes = () => {
        let ingredientes = []

        for ( let i = 0; i < 15; i++ ) {
            if ( receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>
                    "{receta[`strIngredient${i}`]}"  {receta[`strMeasure${i}`]}
                </li>
                )
            }
        }

        return ingredientes
    }

  return (
    !cargando && (<Modal show={modal} onHide={ () => {
        handleModalClick()  
        }}
        >
        <Image
            src={receta.strDrinkThumb}
            alt={`Imagen receta ${receta.strDrink}`}
            className="p-3"
            />
        <Modal.Header>
            <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="p-3">
                <div>
                    <h2>Instrucciones</h2>
                    <p>{receta.strInstructionsES === null ? receta.strInstructions : receta.strInstructionsES}</p>
                </div>
                <div>
                    <h2>Ingredientes y Cantidad</h2>
                    {mostrarIngredientes()}
                </div>
            </div>
        </Modal.Body>
       </Modal>)
  );
};

export default ModalBebida;
