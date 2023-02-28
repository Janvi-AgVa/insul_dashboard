import {
    UPDATEIMFORMATION_FAIL,
    UPDATEIMFORMATION_REQUEST,
    UPDATEIMFORMATION_SUCCESS,
    GETIMFOTMATION_FAIL,GETIMFOTMATION_REQUEST,GETIMFOTMATION_SUCCESS
} from '../types/ProfileConstants'

export const getInformationReducer = (state = {}, action) => {
    switch (action.type) {
      case GETIMFOTMATION_REQUEST:
        return {
          loading: true,
        };
      case GETIMFOTMATION_SUCCESS:
        return {
          loading: false,
          allUserData: action.payload,
        };
      case GETIMFOTMATION_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const updateInformationReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATEIMFORMATION_REQUEST:
        return {
          loading: true,
        };
      case UPDATEIMFORMATION_SUCCESS:
        return {
          loading: false,
          data: action.payload,
        };
  
      case UPDATEIMFORMATION_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };