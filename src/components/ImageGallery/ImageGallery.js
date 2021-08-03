import { Component } from "react";
import PropTypes from "prop-types";

class ImageGallery extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return <ul className="ImageGallery">{this.props.children}</ul>;
  }
}

export default ImageGallery;
