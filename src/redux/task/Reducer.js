import { ADD_TASK } from './task/Action-Types';

// initiate the state
const initialState = () => {
  return {
    tasks: [
      {
        id:1,
        description: '',
        isDone: false
      }
    ]
  }
}

// define reducer function:
const Reducer = (state = initialState, action ) => {
  switch (action.type) {
      case ADD_TASK: 
      return {
        tasks: [...state.tasks, action.payload ]
      }       
    
      default: return state 
    }
}

export default Reducer