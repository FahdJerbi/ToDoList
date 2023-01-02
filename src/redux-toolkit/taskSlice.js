import { createSlice } from "@reduxjs/toolkit";

// set default state:
const initialState = {
  tasksList: [
    {
      id: Math.random(),
      description: "task 1",
      isDone: false
    }
  ]
};

// create the task slice:
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // console.log(action.payload);
      state.tasksList = [...state.tasksList, action.payload];
    },
    editTask: (state, action) => {
      let { tasksList } = state;
      state.tasksList = tasksList.map((oldTask) =>
        oldTask.id === action.payload.id
          ? { ...action.payload, isDone: !action.payload.isDone }
          : oldTask
      );
    }
  }
});

// export actions and export default reducers:
export const { addTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
