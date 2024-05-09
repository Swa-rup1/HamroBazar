import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./Slices/metaReducer";

import productSlice from "./Slices/ProductSlice";
import categoriesSlice from "./Slices/categoriesSlice";
import Addtocart from "./Slices/Addtocart";


const resetSlices = [
  "addtocard",
  "productSlice",
  "categoriesSlice",
 
  
  
];

const rootreducer = createResetMetaReducer(
  "Global RESET",
  resetSlices
)(
  combineReducers({
    addtocard: Addtocart,
    productSlice: productSlice,
    categoriesSlice: categoriesSlice,
    
  })
);

const persistConfig = {
  key: "root",
  storage,
  whitelist: resetSlices,
};
export default persistReducer(persistConfig, rootreducer);
