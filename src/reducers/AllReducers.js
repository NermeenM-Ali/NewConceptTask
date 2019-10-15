import {combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'

const AllReducers = combineReducers({
    form: formReducer
})

export default AllReducers