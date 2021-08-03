import { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderSpinner from "react-loader-spinner";

class Loader extends Component {
  render() {
    return (
      <LoaderSpinner
        className="Loader"
        type="ThreeDots"
        color="#3f51b5"
        height={50}
        width={50}
        timeout={10000} //10 secs
      />
    );
  }
}

export default Loader;
