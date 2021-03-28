import React, { Component} from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const withErrorHandler = (wrappedComponent, axios) => {
  return class extends Component {
      state = {
          error: null
      }
      componentDidMount(){
          axios.interceptors.request.use(req => {
              this.setState({error: null})
            
          })
          axios.interceptors.response.use(null, error => {
            this.setState({error: error})
          })
      }
      render() {
          return (
            <Aux>
            <Modal show={this.state.error}>{this.state.error.message}</Modal>
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
