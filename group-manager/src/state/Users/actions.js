import { createAction } from "redux-actions";

// Actions (tipos de acciones)
export const ADD_USER = "ADD_USER";
export const EDIT_USER = "EDIT_USER";
export const REMOVE_USER = "REMOVE_USER";


// Action Creators => estas son las cajas 
export const addUser = createAction(ADD_USER);
export const editUser = createAction(EDIT_USER);
export const removeUser = createAction(REMOVE_USER);

