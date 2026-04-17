import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../utils/api";


// Signup API with Axios
export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/signup", userData);

            return response.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || error.message
            );
        }
    }
);
// Login API
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.post("/auth/login", userData);
            console.log("response : >>>> ",response.data.data);
            
            return response.data.data;
        } catch (error) {
            return rejectWithValue(
                error?.response?.data?.message || error.message
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
        success: false,
    },
    reducers: {
        clearState: (state) => {
            state.error = null;
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        // Singup User
        builder
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload;
            })

            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Login user
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.user = action.payload.user;
                // Store in localStorage
                if (typeof window !== "undefined") {
                    localStorage.setItem("token", action.payload.token);
                    localStorage.setItem("user", JSON.stringify(action.payload.user));
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },

});

export const { clearState } = authSlice.actions;
export default authSlice.reducer;