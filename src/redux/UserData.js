const initialState = {
  userData: {
    email: "",
    password: "",
    dateOfBirth: {
      day: "",
      month: "",
      year: ""
    },
    gender: "",
    howHearAboutUs: ""
  }
};

export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case "firstStep":
      return {
        userData: {
          ...state.userData,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case "secondStep":
      return {
        userData: {
          ...state.userData,
          dateOfBirth: {
            day: parseInt(action.payload.day),
            month: parseInt(action.payload.month),
            year: parseInt(action.payload.year)
          },
          gender: action.payload.gender
        }
      };
    default:
      return state;
  }
}
