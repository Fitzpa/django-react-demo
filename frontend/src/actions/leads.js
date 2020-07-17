import axios from 'axios';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

export const getLeads = () => (dispatch) => {
  axios
    .get('/api/leads/')
    .then((res) => {
      console.log('getting leads');
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((res) => {
      console.log('deleting lead');
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addLead = (lead) => (dispatch) => {
  axios
    .post('/api/leads/', lead)
    .then((res) => {
      console.log('adding leads');
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
