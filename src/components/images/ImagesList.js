import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Table, Button } from "reactstrap";
import * as imagesActions from "../../redux/actions/imagesActions";

import * as favoriteImagesAction from "../../redux/actions/favoriteImagesAction";
import alertify from "alertifyjs";

import "./style.css";

import { bindActionCreators } from "redux";
class ImagesList extends Component {
  componentDidMount() {
    this.props.actions.getImages();
  }
  download = (e) => {
    debugger;
    console.log(e);
    fetch(e, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  addToFavorite = (image) => {
    this.props.actions.addToFavorite({ isAdding: true, image });
    alertify.success(image.author + " favorilere eklendi");
  };

  render() {
    return (
      <div>
        <Table>
          <thead></thead>
          <tbody>
            {this.props.images.map((image) => (
              <tr key={image.id}>
                <td>
                  <img className="custom-images" src={image.download_url}></img>
                </td>
                <td>
                  <div className="custom-area">
                    <div className="text-style">{image.author}</div>
                    <div className="buttons">
                      <div className="button1">
                        <Button
                          onClick={(e) => this.download(image.download_url)}
                          color="success"
                        >
                          İndir
                        </Button>
                      </div>
                      <div>
                        <Button
                          color="success"
                          onClick={() => this.addToFavorite(image)}
                        >
                          Favorilere Ekle
                        </Button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    images: state.imageListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getImages: bindActionCreators(imagesActions.getImages, dispatch),
      addToFavorite: bindActionCreators(
        favoriteImagesAction.addToFavorite,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ImagesList);
