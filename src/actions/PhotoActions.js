import { photoConstants } from "../constants";
import { photoService } from "../services";

export const photoActions = {
  updatePhotos,
  searchPhotos
};

function updatePhotos() {
  return dispatch => {
    photoService.updatePhotos().then(
      data => {      
        if (data.photos.total > 0) {
          dispatch(success(data.photos));
        } else {
          dispatch(failure(data.message));
        }
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function success(photo) {
    return { type: photoConstants.UPDATE_SUCCESS, photo };
  }
  function failure(error) {
    return { type: photoConstants.UPDATE_FAILURE, error };
  }
}

function searchPhotos(params) {
  return dispatch => {
    photoService.searchPhotos(params).then(
      data => {              
        if (data.photos.total > 0) {
          dispatch(success(data.photos));
        } else {
          dispatch(failure(data.message));
        }
      },
      error => {
        dispatch(failure(error));
      }
    );
  };

  function success(photo) {
    return { type: photoConstants.SEARCH_SUCCESS, photo };
  }
  function failure(error) {
    return { type: photoConstants.SEARCH_FAILURE, error };
  }
}
