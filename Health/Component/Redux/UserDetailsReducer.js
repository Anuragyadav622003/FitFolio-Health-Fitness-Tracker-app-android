// userDetailsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  userDetails: {
    height: '',
    weight: '',
    age: '',
    gender:'',
    name:'',
    profileImageUri:null
  },
};

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setProfileImageUri: (state, action) => {
      state.userDetails.profileImageUri = action.payload;
    },
    clearUserDetails: state => {
      state.userDetails = initialState.userDetails;
    },
  },
});

export const { setUserDetails, clearUserDetails, setProfileImageUri } = userDetailsSlice.actions;

// Selector function to get user details from state
export const selectUserDetails = state => state.userDetails.userDetails;

export default userDetailsSlice.reducer;

const persistConfig = {
  key: 'userDetails',
  storage:AsyncStorage
};
export const persistedUserDetailsReducer = persistReducer(persistConfig, userDetailsSlice.reducer);