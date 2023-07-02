import Utils from ".";

const checkUserValidation = (data: any) => {
  if (data) {
    const { statusCode } = data,
      { sessionExpired, unauthorized, accessDenied } =
        Utils.constants.api_error_code;

    if (statusCode) {
      return (
        statusCode === sessionExpired ||
        statusCode === unauthorized ||
        statusCode === accessDenied
      );
    }
    return false;
  }
  return false;
};

/**
 *
 * @param endPoint api end point
 * @param params request data
 * @param successCallback function for handle success response
 * @param errorCallback  function for handle error response
 */
const logOutApiCall = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
};
const loginApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.axios
    .post(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
            message: "Something went wrong!"
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired
          Utils.showAlert(2, data.message);
          setTimeout(() => {
            if (localStorage.getItem("accessToken") !== null) {
              // getAccessTokenUsingRefreshToken();
            }
          }, 1000);
        } else {

          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const deleteApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.axios
    .delete(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const postApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.axios
    .post(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const putApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.axios
    .put(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const getApiCall = (
  endPoint: string,
  params: string = "",
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.axios
    .get(Utils.constants.apiUrl + endPoint + params, {})
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
const getApiCallOne = (
  endPoint: string,
  params: string = "",
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.axios1
    .get(Utils.constants.apiUrl + endPoint + params, {})
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};

const patchApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.axios
    .patch(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired

          Utils.showAlert(2, data.message);
          setTimeout(() => {
            logOutApiCall();
            // if (localStorage.getItem('accessToken') !== null) {
            //   getAccessTokenUsingRefreshToken();
            // }
          }, 1000);
        } else {
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};


const api = {
  postApiCall,
  loginApiCall,
  putApiCall,
  getApiCall,
  patchApiCall,
  deleteApiCall,
  getApiCallOne
};
export default api;
