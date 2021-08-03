import { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  static defaultProps = {
    text: "Just Button",
    totalElements: 1,
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    totalElements: PropTypes.number,
  };

  componentDidMount() {
    const { totalElements } = this.props;
    if (totalElements > 10) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  render() {
    const { text, onClick } = this.props;
    return (
      <button className="Button" onClick={onClick} type="button">
        {text}
      </button>
    );
  }
}

export default Button;
