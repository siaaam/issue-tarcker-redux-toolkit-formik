import { createSlice } from "@reduxjs/toolkit";

const initialIssue = [
  {
    id: 1,
    title: "fix the homepage",
    assignedTo: "siam",
    priority: "high",
  },
  {
    id: 2,
    title: "fix the navbar",
    assignedTo: "rayhan",
    priority: "medium",
  },
];

const issuesSlice = createSlice({
  name: "issues",
  initialState: initialIssue,
  reducers: {
    showIssue: (state) => state,
    addIssue: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { showIssue, addIssue } = issuesSlice.actions;
export default issuesSlice.reducer;
