import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsAdd: (state, action) => {
      state.news = action.payload;
    }, 
  },
});

export const selectAllNews = (state) => state.news;
export const { newsAdd } = newsSlice.actions;

export default newsSlice.reducer;
