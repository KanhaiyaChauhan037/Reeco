import { Add, Getdata, Deletedata, Editdata } from "./ActionType";

const initialState = {
  loading: true,
  get: [],

};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
  
    case Getdata: {
      return {
        ...state,
        get: action.payload,
        loading: false,

      };
    }
   
    case Editdata: {
      const updatedData = state.get.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      return {
        ...state,
        get: updatedData,
      };
    }
   
    
    default:
      return state;
  }
};