import { createStore } from "redux"; // import instance from reducer library
import reducer from "./reducer"; // import the reducer function we created
const store = createStore(reducer); // create a new store with our reducer function

export default store; // export store