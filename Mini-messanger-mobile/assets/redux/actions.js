export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

export const deleteMessage = (data) => (dispatch, getState) => {
  try {
   // console.log(data);
    dispatch({
      type: DELETE_MESSAGE,
      payload: {
        data,
        message: `Review was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const addMessage = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: ADD_MESSAGE,
      payload: {
        data,
        message: `Review was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};
