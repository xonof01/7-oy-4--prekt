import { createStore } from "import { connect } from 'react-redux'";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer)