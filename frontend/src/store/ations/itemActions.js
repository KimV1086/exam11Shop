import axios from "../../axios-api";
import {push} from 'connected-react-router';
import {NotificationManager} from 'react-notifications';

export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";
export const FETCH_ITEMS_ID_SUCCESS = "FETCH_ITEMS_ID_SUCCESS";
export const SEND_ITEM_SUCCESS = 'SEND_ITEM_SUCCESS';
export const SEND_ITEM_FAILURE = "SEND_ITEM_FAILURE";

const fetchItemsSuccess = data => ({type: FETCH_ITEMS_SUCCESS, data});

const fetchItemsFailure = error => ({type: FETCH_ITEMS_FAILURE, error});

const sendItemsSuccess = () => ({type: SEND_ITEM_SUCCESS});

const sendItemsFailure = error => ({type: SEND_ITEM_FAILURE, error});

const fetchItemsIdSuccess = data => ({type: FETCH_ITEMS_ID_SUCCESS, data});

export const fetchItems = () => {
  return dispatch => {
    return axios.get('/items').then(
      response => {
        dispatch(fetchItemsSuccess(response.data));
      },
      error => {
        dispatch(fetchItemsFailure(error));
      }
    );
  };
};

export const fetchItemsId = id => {
  return dispatch => {
    return axios.get('/items/' + id).then(
      response => dispatch(fetchItemsIdSuccess(response.data)),
      error => dispatch(fetchItemsFailure(error))
    );
  };
};


export const sendItem = itemData => {
  return (dispatch, getState) => {
    let token = getState().user.user.token;
    const header = {headers: {'Authorization': token}};
    return axios.post('/items', itemData, header).then(
      (response) => {
        dispatch(sendItemsSuccess());
        NotificationManager.success('Posted successfully');
        dispatch(push('/'));
      },
      error => {
        if (error.response && error.response.data) {
          dispatch(sendItemsFailure(error.response.data));
        } else {
          dispatch(sendItemsFailure({global: 'No connection'}))
        }

      }
    )
  }
};