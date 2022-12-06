import {
  SET_USER_NAME,
  SET_USER_AGE,
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from "./actions";

const initialState = {
  contacts: [
    {
      id: 1,
      name: "Ayazbayev Ruslan",
      status: "offline",
      phoneNumber: "87077013791",
      messages: [
        "message1",
        "message2",
        "message3",
        "message4",
        "message5",
        "message6",
        "message7",
        "message8",
        "message9",
        "message10",
        "message11",
        "message12",
        "message13",
        "message14",
        "message15",
        "message16",
        "message17",
        "message18",
        "message19",
      ],
    },
    {
      id: 2,
      name: "Bekov Alan",
      status: "offline",
      phoneNumber: "87056567070",
      messages: [
        "message1",
        "message2",
        "message3",
        "message4",
        "message5",
        "message6",
        "message7",
        "message8",
        "message9",
        "message10",
        "message11",
        "message12",
        "message13",
        "message14",
        "message15",
        "message16",
        "message17",
        "message18",
        "message19",
      ],
    },
    {
      id: 3,
      name: "Koshenayev Shalkar",
      status: "online",
      phoneNumber: "87079119971",
      messages: [
        "message1",
        "message2",
        "message3",
        "message4",
        "message5",
        "message6",
        "message7",
        "message8",
        "message9",
        "message10",
        "message11",
        "message12",
        "message13",
        "message14",
        "message15",
        "message16",
        "message17",
        "message18",
        "message19",
      ],
    },
    {
      id: 4,
      name: "Sagyndyk Miras",
      status: "offline",
      phoneNumber: "87024222717",
      messages: [
        "message1",
        "message2",
        "message3",
        "message4",
        "message5",
        "message6",
        "message7",
        "message8",
        "message9",
        "message10",
        "message11",
        "message12",
        "message13",
        "message14",
        "message15",
        "message16",
        "message17",
        "message18",
        "message19",
      ],
    },
    {
      id: 5,
      name: "Seilov Tamirlan",
      status: "offline",
      phoneNumber: "87058559398",
      messages: [
        "message1",
        "message2",
        "message3",
        "message4",
        "message5",
        "message6",
        "message7",
        "message8",
        "message9",
        "message10",
        "message11",
        "message12",
        "message13",
        "message14",
        "message15",
        "message16",
        "message17",
        "message18",
        "message19",
      ],
    },
  ],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_MESSAGE: {
      console.log("messages ", state.contacts[action.payload.data.id].messages);
      console.log(action.payload.data.message);

      state.contacts[action.payload.data.id].messages.splice(-1);
      console.log(state.contacts[action.payload.data.id].messages);
      return {
        ...state,
        contacts: [
          ...state.contacts[action.payload.data.id].messages.splice(-1),
        ],
      };
    }
    case ADD_MESSAGE: {
      const index = action.payload.data.id;
      const newArray = [...state.contacts];
      newArray[index].messages.push(action.payload.data.message);
    }
    default:
      return state;
  }
}

export default userReducer;
