import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEMS" actions
function* fetchItems() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('api/shelf', config);

        yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch (error) {
        console.log('Items get request failed', error);
    }
}

function* deleteItem(action){
    try{
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    const response = yield axios.delete(`/api/shelf/${action.payload.id}`);
    yield put({type: 'FETCH_ITEMS'});
    console.log(response);
    }catch(error){
        console.log(error);
    }
    
}


function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('DELETE_ITEM', deleteItem);
}

export default itemsSaga;
