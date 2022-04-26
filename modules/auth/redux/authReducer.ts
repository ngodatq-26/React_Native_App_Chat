import { createSlice } from "@reduxjs/toolkit";
const authState = {
    token : '1',
}
const AuthSlice = createSlice({
    name : 'auth',
    initialState : authState,
    reducers : {
        setTokenCookies : (state ,action) =>{
            state.token = action.payload
        }
    },
    
})

export const {setTokenCookies} = AuthSlice.actions
export default AuthSlice.reducer;