import { Component } from "react";

import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Button from "./components/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal";

import fetchImages from "./Services/PixabayAPI";

class App extends Component {
  state = {
    searchQuery: "",
    modalShow: false,
    pageNumber: 1,
    images: [],
    modalImageURL: "",
    loader: false,
    error: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getItemsForGallery();
    }
  }

  toggleModal = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  openImage = (id) => {
    this.toggleModal();
    const { images } = this.state;
    const clickImage = images.filter((item) => item.id === Number(id));
    this.setState({ modalImageURL: clickImage[0].largeImageURL });
  };

  getSearchQuery = (query) => {
    if (query === this.state.searchQuery) {
      return;
    }
    this.setState({
      searchQuery: query,
      images: [],
      pageNumber: 1,
      error: "",
    });
  };

  getItemsForGallery = async () => {
    this.setState({ loader: true });

    const { searchQuery, pageNumber } = this.state;
    try {
      const newImages = await fetchImages(searchQuery, pageNumber);
      if (newImages.length === 0) {
        this.setState({ error: "empty responce" });
      }

      this.setState(({ images, pageNumber }) => {
        return {
          images: [...images, ...newImages],
          pageNumber: pageNumber + 1,
        };
      });
    } catch (error) {
      this.setState({ error: error });
    }

    this.setState({ loader: false });
  };

  render() {
    const { images, modalImageURL, loader, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.getSearchQuery} />
        <ImageGallery>
          {images.map((item) => (
            <ImageGalleryItem
              key={item.id}
              id={item.id}
              url={item.webformatURL}
              openImage={this.openImage}
            ></ImageGalleryItem>
          ))}
        </ImageGallery>

        {error && (
          <p>oops... something went wrong, try again later or change query</p>
        )}

        {loader && <Loader />}

        {images.length > 0 && !loader && (
          <Button
            onClick={this.getItemsForGallery}
            text={"load more"}
            totalElements={images.length}
          />
        )}

        {this.state.modalShow && (
          <Modal url={modalImageURL} modalToggle={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
