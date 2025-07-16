import {
  SET_SEARCH_TERM,
  SET_FILTER_TYPE,
  FilterState,
  FilterActionTypes,
} from "./types";

const initialState: FilterState = {
  searchTerm: "",
  filterType: "all",
};

const filterReducer = (
  state = initialState,
  action: FilterActionTypes
): FilterState => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
