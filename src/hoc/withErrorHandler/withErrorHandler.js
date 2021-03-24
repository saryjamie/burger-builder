import React from "react";
import Modal from "../../components/UI/Modal/Modal"
Aux from "../Aux/Aux"


const withErrorHandler = (wrappedComponent) => {
  return (props) => {
    return (
        <Aux>
            <Modal>
                Something didn't work!
            </Modal>
            <wrappedComponent {...props} />
        </Aux>
        
    )
  };
};

export default withErrorHandler;
