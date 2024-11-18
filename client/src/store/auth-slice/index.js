import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const userRegistration = createAsyncThunk("auth/register" , async (formData)=>{
  try {

    const res = await axios.post("http://localhost:8000/api/v1/register" ,formData )
    return res.data
    
  } catch (error) {
    console.log("error" , error)
    return rejectWithValue(error.response?.data || { message: "Registration failed" });
    
  }
})


export const userLogin = createAsyncThunk("auth/login" , async(formData)=>{
  const res = await axios.post("http://localhost:8000/api/v1/login" , formData)
  return res.data
})

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setUser: (state, actions) => {},
  },

  extraReducers:(builder)=>{
    builder.addCase(userRegistration.pending , (state , action)=>{
      state.isLoading = true
    })

    builder.addCase(userRegistration.fulfilled , (state , action)=>{
      state.isLoading = false
      state.user = null
      state.isAuthenticated = false
    
    })

    builder.addCase(userRegistration.rejected , (state , action)=>{
      state.isLoading = false
      state.user = null
      state.error = action.payload
    })

    builder.addCase(userLogin.pending , (state , action)=>{
      state.isLoading = true
    })

    builder.addCase(userLogin.fulfilled , (state , action)=>{
      state.isLoading = false
      state.isAuthenticated = action.payload.success? true :false
      state.user = action.payload.success? action.payload.user:null
    })

    builder.addCase(userLogin.rejected , (state , action)=>{
      state.isAuthenticated = false
      state.isLoading = false
      state.user = null
    })
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
