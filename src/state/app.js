// Create initial state
const initialState = {
  isDarkMode: false,
};

// Add the action creator
const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE, isDarkMode
})

// Add the Reducer

export default (state=initialState, action) => {
  switch(action.type) {
    case TOGGLE_DARKMODE: 
      return { ...state, isDarkMode: action.isDarkMode };
    default:
      return state;
  }
}

