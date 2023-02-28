import { configureStore } from "@reduxjs/toolkit";
import issuesReducer from "../features/issues/issueSlice";

const store = configureStore({
  reducer: {
    issuesReducer,
  },
});

export default store;
