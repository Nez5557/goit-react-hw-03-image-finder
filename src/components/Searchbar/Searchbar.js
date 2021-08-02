import { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: "",
  };

  inputHandler = (evt) => {
    this.setState({ inputValue: evt.target.value });
  };

  submitHandler = (evt) => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    const { inputHandler, submitHandler } = this;

    return (
      <header className="Searchbar">
        <form onSubmit={submitHandler} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            onChange={inputHandler}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={inputValue}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
