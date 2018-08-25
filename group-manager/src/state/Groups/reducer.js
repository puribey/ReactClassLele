import { handleActions } from "redux-actions";
import * as actions from "./actions";

const INITIAL_STATE = {
  listOfGroups: [
    { id: 1, description: "Arte" },
    { id: 2, description: "Programación" },
    { id: 3, description: "Cine" }
  ]
};
