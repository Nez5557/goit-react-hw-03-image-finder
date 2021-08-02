import { Component } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  static defaultProps = {
    url: "https://static8.depositphotos.com/1431107/919/i/600/depositphotos_9199988-stock-photo-oops-icon.jpg",
  };

  static propTypes = {
    openImage: PropTypes.func.isRequired,
    url: PropTypes.string,
    id: PropTypes.number.isRequired,
  };

  clickHandler = (evt) => {
    const { openImage } = this.props;
    const id = evt.target.id;
    openImage(id);
  };

  render() {
    const { url, id } = this.props;

    return (
      <li key={id} className="ImageGalleryItem">
        <img
          onClick={this.clickHandler}
          id={id}
          src={url}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
