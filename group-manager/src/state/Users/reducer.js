import { handleActions } from "redux-actions";
import * as actions from "./actions";

const INITIAL_STATE = {
  listOfUsers: [
    { id: 1, name: "Gia", lastName: "Castello", groups: [1, 2, 3] },
    { id: 2, name: "Puri", lastName: "Bey", groups: [1, 2, 3] },
    { id: 3, name: "Pao", lastName: "Gutierrez", groups: [1, 2, 3] },
    { id: 3, name: "Sofi", lastName: "Estevez", groups: [1, 2, 3] },
    { id: 3, name: "Mar", lastName: "Calmon", groups: [1, 2, 3] }
  ]
};
