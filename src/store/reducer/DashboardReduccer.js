import{
TODAYREADING_FAIL,
TODAYREADING_REQUEST,
TODAYREADING_SUCCESS,
AVGFROMDATERANGE_FAIL,
AVGFROMDATERANGE_SUCCESS,
AVGFROMDATERANGE_REQUEST,
DEVICE_DATA_FAIL,
DEVICE_DATA_SUCCESS,
DEVICE_DATA_REQUEST,
GET_READING_FAIL,
GET_READING_REQUEST,
GET_READING_SUCCESS,
PREVWEEKRANGE_FAIL,
PREVWEEKRANGE_REQUEST,
PREVWEEKRANGE_SUCCESS
}  from "../types/DashboardConstants"
export const todayReadingReducer = (state = {}, action) => {
  switch (action.type) {
    case TODAYREADING_REQUEST:
      return {
        loading: true,
      };
    case TODAYREADING_SUCCESS:
      return {
        loading: false,
        allProjectData: action.payload,
      };
    case TODAYREADING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const avgFromDateRangeReducer = (state = {}, action) => {
  switch (action.type) {
    case AVGFROMDATERANGE_REQUEST:
      return {
        loading: true,
      };
    case AVGFROMDATERANGE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case AVGFROMDATERANGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const prevweekReducer = (state = {}, action) => {
  switch (action.type) {
    case PREVWEEKRANGE_REQUEST:
      return {
        loading: true,
      };
    case PREVWEEKRANGE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case PREVWEEKRANGE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const deviceDataReducer = (state = {}, action) => {
  switch (action.type) {
    case DEVICE_DATA_REQUEST:
      return {
        loading: true,
      };
    case DEVICE_DATA_SUCCESS:
      return {
        loading: false,
        deviceData: action.payload,
      };
    case DEVICE_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getReadingReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_READING_REQUEST:
      return {
        loading: true,
      };
    case GET_READING_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case GET_READING_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
