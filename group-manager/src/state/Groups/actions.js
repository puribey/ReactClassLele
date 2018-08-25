import { createAction } from "redux-actions";

// Actions (tipos de acciones)
export const ADD_GROUP = "ADD_GROUP";
export const EDIT_GROUP = "EDIT_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";


// Action Creators => estas son las cajas 
export const addGroup = createAction(ADD_GROUP);
export const editGroup = createAction(EDIT_GROUP);
export const removeGroup = createAction(REMOVE_GROUP);

