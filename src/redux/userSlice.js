// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import unsplashAPI from "../assets/api";

// const initialState = {
//   status: null,
//   userInfo: {},
//   userToken: null,
// };

// export const registerUser = createAsyncThunk(
//   "registerUser",
//   async ({ firstName, email, password }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       await axios.post(
//         "/api/user/register",
//         { firstName, email, password },
//         config
//       );
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// export const userLogin = createAsyncThunk(
//   "userLogin",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/user/login",
//         { email, password },
//         config
//       );
//       localStorage.setItem("userToken", data.userToken);
//       return data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const getUserDetails = createAsyncThunk(
//   "getUserDetails",
//   async (arg, { getState, rejectWithValue }) => {
//     try {
//       const { user } = getState();

//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.userToken}`,
//         },
//       };
//       const { data } = await axios.get(`/api/user/profile`, config);
//       return data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const userSlice = createSlice({
//   name: "userSlice",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("userToken");
//       state.status = null;
//       state.userInfo = null;
//       state.userToken = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.status = "pending";
//       })
//       .addCase(registerUser.rejected, (state) => {
//         state.status = "rejected";
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//       })
//       .addCase(getUserDetails.pending, (state) => {
//         state.status = "pending";
//       })
//       .addCase(getUserDetails.rejected, (state) => {
//         state.status = "rejected";
//       })
//       .addCase(getUserDetails.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//       })
//       .addCase(userLogin.pending, (state) => {
//         state.status = "pending";
//       })
//       .addCase(userLogin.rejected, (state) => {
//         state.status = "rejected";
//       })
//       .addCase(userLogin.fulfilled, (state, action) => {
//         state.status = "fulfilled";
//       });
//   },
// });

// export const { logout } = userSlice.actions;

// export default userSlice.reducer;
