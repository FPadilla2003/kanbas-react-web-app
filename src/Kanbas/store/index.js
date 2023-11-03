import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/moduleReducer";


const store = configureStore({
    reducer: {
        modulesReducer
    }
});


export default store;