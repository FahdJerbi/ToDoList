import {createStore} from 'redux'
import Reducer from './task/Reducer'


const store = createStore(Reducer)

export default store