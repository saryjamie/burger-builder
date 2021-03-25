import React, { Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (wrappedComponent, axios) => {
  return class extends Component {
      componentDidMount(){
          axios.interceptors.response.use(response)
      }
      render() {
          return (
            <Aux>
            <Modal show>Something didn't work!</Modal>
            <wrappedComponent {...this.props} />
          </Aux>
          )
      }
  } (props) => {
    return (

    );
  };
};

export default withErrorHandler;
