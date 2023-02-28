import axios from 'axios';
import Cookies from 'universal-cookie';
import {
    GETIMFOTMATION_FAIL,
    GETIMFOTMATION_REQUEST,
    GETIMFOTMATION_SUCCESS,
    UPDATEIMFORMATION_FAIL,
    UPDATEIMFORMATION_REQUEST,
    UPDATEIMFORMATION_SUCCESS
} from '../types/ProfileConstants'
const cookies = new Cookies();
// GET InFORMATION
export const getImformation = () => async (dispatch) => {
    try {
      dispatch({
        type: GETIMFOTMATION_REQUEST,
      });
      const token = cookies.get('ddAdminToken');
      // console.log('token',token)
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/users/myProfile`,
        config
      );
      dispatch(
        {
          type: GETIMFOTMATION_SUCCESS,
          payload: data,
        });
      // console.log('data',data)
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: GETIMFOTMATION_FAIL,
        payload:
          error &&
          error.response &&
          error.response.data &&
          error.response.data.data &&
          error.response.data.data.err &&
          error.response.data.data.err.msg,
      });
    }
  };
// Update Information
export const updateInformation = 
(firstName,lastName,phone,gender,country, navigate)=> async (dispatch) => {
  try {
    dispatch({
      type: UPDATEIMFORMATION_REQUEST,
    });
    console.log(firstName,lastName,'email',phone,gender,country,'password')
    const token = cookies.get('ddAdminToken');
    // console.log('token',token)
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/v1/users/updateProfile`,
      {
        firstName,
        lastName,
        phone,
        gender,
        country

      },
      config
    );
    dispatch(
      {
        type: UPDATEIMFORMATION_SUCCESS,
        payload: data,
      });
    console.log('data',data)
    localStorage.setItem('UserInfo', data);
      navigate('/home');
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: UPDATEIMFORMATION_FAIL,
      payload:
        error &&
        error.response &&
        error.response.data &&
        error.response.data.data &&
        error.response.data.data.err &&
        error.response.data.data.err.msg,
    });
  }
};