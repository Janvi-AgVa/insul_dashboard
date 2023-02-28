import axios from 'axios';
import Cookies from 'universal-cookie';
import {
  TODAYREADING_FAIL,
  TODAYREADING_SUCCESS,
  TODAYREADING_REQUEST,
  AVGFROMDATERANGE_FAIL,
  AVGFROMDATERANGE_REQUEST,
  AVGFROMDATERANGE_SUCCESS,
  DEVICE_DATA_FAIL,
  DEVICE_DATA_SUCCESS,
  DEVICE_DATA_REQUEST,
  GET_READING_FAIL,
  GET_READING_REQUEST,
  GET_READING_SUCCESS,
  PREVWEEKRANGE_REQUEST,
  PREVWEEKRANGE_SUCCESS,
  PREVWEEKRANGE_FAIL
} from "../types/DashboardConstants"
const cookies = new Cookies();

// Today's Reading
export const todayReading = () => async (dispatch) => {
  try {
    dispatch({
      type: TODAYREADING_REQUEST,
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
      `${process.env.REACT_APP_BASE_URL}/api/v1/dashboard/today-intake`,
      config
    );
    dispatch(
      {
        type: TODAYREADING_SUCCESS,
        payload: data,
      });
    console.log('data',data)
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: TODAYREADING_FAIL,
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

// Avg from date range
export const avgfromdaterange = ({ start, end }) => async (dispatch) => {
  try {
    dispatch({
      type: AVGFROMDATERANGE_REQUEST,
    });
    const token = cookies.get('ddAdminToken');
    // console.log('token',token)
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const startdate = start
    const enddate = end
    let response
    response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/dashboard/get-avg-report?startDate=${startdate}&endDate=${enddate}`,
      config
    );
    dispatch(
      {
        type: AVGFROMDATERANGE_SUCCESS,
        payload: response.data.data,
      });
    console.log('data1',response.data.data)
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: AVGFROMDATERANGE_FAIL,
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
//prev week
export const previousWeek = ({ start, end }) => async (dispatch) => {
  try {
    dispatch({
      type: PREVWEEKRANGE_REQUEST,
    });
    const token = cookies.get('ddAdminToken');
    // console.log('token',token)
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const startdate = start
    const enddate = end
    let response
    response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/dashboard/get-avg-report?startDate=${startdate}&endDate=${enddate}`,
      config
    );
    dispatch(
      {
        type: PREVWEEKRANGE_SUCCESS,
        payload: response.data.data,
      });
    // console.log('data',response.data.data)
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: PREVWEEKRANGE_FAIL,
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


//Device Data- Battery ,Ressivor
export const deviceData = () => async (dispatch) => {
  try {
    dispatch({
      type: DEVICE_DATA_REQUEST,
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
      `${process.env.REACT_APP_BASE_URL}/api/v1/dashboard/get-updated-device-details`,
      config
    );
    dispatch(
     {
        type: DEVICE_DATA_SUCCESS,
        payload: data,
      });
 
    // console.log('data', data)
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: DEVICE_DATA_FAIL,
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

//Get insuline and glucose reading weekly
export const gettingReading = ({ start, end }) => async (dispatch) => {
  try {
    dispatch({
      type: GET_READING_REQUEST,
    });
    const token = cookies.get('ddAdminToken');
    // console.log('token',token)
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const startdate = start
    const enddate = end
    let response
    response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/v1/dashboard/get-readings-by-daterange?startDate=${startdate}&endDate=${enddate}`,
      config
    );
    dispatch(
      {
        type: GET_READING_SUCCESS,
        payload: response.data.data,
      });
    console.log('data2',response.data.data)
  } catch (error) {
    console.log("error", error);
    dispatch({
      type: GET_READING_FAIL,
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