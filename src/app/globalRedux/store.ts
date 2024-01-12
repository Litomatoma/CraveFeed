import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/counterSlice"
import currentUserReducer from "./features/users/loginUser";
import userFollowersReducer from "./features/users/followersUser"
export const makeStore = () => {
    return configureStore({
        reducer : {
            counter : counterReducer,
            currentUser : currentUserReducer,
            userFollowers : userFollowersReducer,
        }
    })
}

// This is to infer types of AppStore
export type AppStore = ReturnType < typeof makeStore>
// THis is to infer types of RootState and AppDispatch types frfom the store itself
export type RootState = ReturnType< AppStore['getState']>
export type AppDispatch = AppStore['dispatch'];