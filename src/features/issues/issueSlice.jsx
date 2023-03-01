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
    updateIssue: (state, action) => {
      const { id, title, assignedTo, priority } = action.payload;
      const isIssueExist = state.filter((issue) => issue.id === id);
      if (isIssueExist) {
        isIssueExist[0].title = title;
        isIssueExist[0].assignedTo = assignedTo;
      }
    },
    deleteIssue: (state, action) => {
      const id = action.payload;
      state = [...state.filter((issue) => issue.id !== id)];
    },
  },
});

export const { showIssue, addIssue, deleteIssue, updateIssue } =
  issuesSlice.actions;
export default issuesSlice.reducer;
