import { Loading, Getdata ,Editprice,Editdata} from "./ActionType";
import axios from "axios";

export const getdata = () => async (dispatch) => {
    dispatch({ type: Loading });
    try {
         const res = await axios.get("https://mock-ezok.onrender.com/orders");
         dispatch({ type: Getdata, payload: res.data })
     //     console.log("aciton", res)
    } catch (error) {
         console.log("error")
    }
}

export const editdata = (id,data) => async (dispatch) => {
     dispatch({ type: Loading });
     try {
          const res = await axios.patch(`https://mock-ezok.onrender.com/orders/${id}`,data);
          dispatch({ type: Editdata, payload: res.data })
          // console.log("aciton", res)
     } catch (error) {
          console.log("error")
     }
 }

 export const editprice = (id,data) => async (dispatch) => {
     dispatch({ type: Loading });
     try {
          const res = await axios.patch(`https://mock-ezok.onrender.com/orders/${id}`,data);
          dispatch({ type: Editprice, payload: res.data })
          // console.log("aciton", res)
     } catch (error) {
          console.log("error")
     }
 }