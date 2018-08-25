import { createAction } from "redux-actions";

// Actions (tipos de acciones)
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// Action Creators => estas son las cajas 
export const addProduct = createAction(ADD_PRODUCT);
export const removeProduct = createAction(REMOVE_PRODUCT);