import * as actionTypes from "./actionTypes";
export function getImagesSuccess(images) {
  return { type: actionTypes.GET_IMAGES_SUCCESS, payload: images };
}
// return function (dispatch) = metodun aksiyon olarak kullanılmasını sağlar.
export function getImages() {
  return function (dispatch) {
    // let url = "http://localhost:3000/products";
    // if (categoryId) {
    //   url = url + "?categoryId=" + categoryId;
    // }

    // return fetch(url)
    //   .then((response) => response.json())
    //   .then((result) => dispatch(getImagesSuccess(result)));

    fetch(`https://picsum.photos/v2/list`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        //injectInfo(responseJson);
        console.log("gelen : ", responseJson);
        dispatch(getImagesSuccess(responseJson));
      });
  };
}
export function createImagesuccess(image) {
  return { type: actionTypes.CREATE_IMAGE_SUCCESS, payload: image };
}
export function updateImagesuccess(image) {
  return { type: actionTypes.UPDATE_IMAGE_SUCCESS, payload: image };
}

export function saveImageApi(product) {
  return fetch("http://localhost:3000/Images/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}
// export function saveProduct(product) {
//   return function (dispatch) {
//     return saveProductApi(product)
//       .then((savedProduct) => {
//         product.id
//           ? dispatch(updateImageSuccess(savedProduct))
//           : dispatch(createImageSuccess(savedProduct));
//       })
//       .catch((error) => {
//         throw error;
//       });
//   };
// }
export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}
export async function handleError(error) {
  console.error("Hata oluştu");
  throw error;
}
