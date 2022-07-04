import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import * as favoriteImagesAction from "../../redux/actions/favoriteImagesAction";
import alertify from "alertifyjs";

import { bindActionCreators } from "redux";
class FavoriteImageList extends Component {
  componentDidMount() {
    console.log(this.props.favoriteImages);
  }
  download = (e) => {
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
  removeFromFavorite = (image) => {
    this.props.actions.removeFromFavorite({ isAdding: false, image });
    alertify.success(image.image.author + " favorilerden çıkarıldı");
  };

  render() {
    return (
      <div>
        <Table>
          <thead></thead>
          <tbody>
            {this.props.favoriteImages ? (
              this.props.favoriteImages.map((image) => (
                <tr key={image.image.id}>
                  <td>
                    <img
                      className="custom-images"
                      src={image.image.download_url}
                    ></img>
                  </td>
                  <td>
                    <div className="custom-area">
                      <div className="text-style">{image.image.author}</div>
                      <div className="buttons">
                        <div className="button1">
                          <Button
                            onClick={(e) =>
                              this.download(image.image.download_url)
                            }
                            color="success"
                          >
                            İndir
                          </Button>
                        </div>
                        <div>
                          <Button
                            color="success"
                            onClick={() => this.removeFromFavorite(image)}
                          >
                            Favorilerden Çıkar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div></div>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    favoriteImages: state.favoriteImagesReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromFavorite: bindActionCreators(
        favoriteImagesAction.removeFromFavorite,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteImageList);
