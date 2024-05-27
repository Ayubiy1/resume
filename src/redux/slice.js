import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "slices",
  initialState: {
    login1: false,
  },
  reducers: {
    getLogin: (state) => {
      console.log("Slice is working");
    },
  },
});

// Correctly extract the actions from the slice
export const { getLogin } = slice.actions;

// Export the reducer
export default slice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const slice = createSlice({
//   name: "slices",
//   initialState: {
//     login: false,
//   },
//   reducers: {
//     getLogin: (item) => {
//       console.log("Slice is working");
//     },
//   },
// });

// export const { getLogin } = createSlice.actions;
// export default slice.reducer;
