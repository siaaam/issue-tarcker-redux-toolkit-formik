import { createSlice } from "@reduxjs/toolkit";

const initialIssue = [
  {
    id: 1,
    title: "fix the homepage",
    assignedTo: "rahim",
    priority: "high",
    description: "this is the description 1",
  },
  {
    id: 2,
    title: "fix the navbar",
    assignedTo: "zahid",
    priority: "medium",
    description: "this is the description 2",
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
    deleteIssue: (state, action) => {
      const id = action.payload;
      console.log(id);
      // state = [...state.filter((issue) => issue.id !== id)];
    },
    updateIssue: (state, action) => {
      const { id, title, assignedTo, priority, description } = action.payload;
      const isIssueExist = state.filter((issue) => issue.id === id);
      if (isIssueExist) {
        isIssueExist[0].title = title;
        isIssueExist[0].assignedTo = assignedTo;
        isIssueExist[0].description = description;
        isIssueExist[0].priority = priority;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      state = [...state.filter((issue) => issue.id !== id)];
    },
  },
});

export const { showIssue, addIssue, updateIssue, deleteIssue, deleteItem } =
  issuesSlice.actions;
export default issuesSlice.reducer;
