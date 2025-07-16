import { SET_SEARCH_TERM, SET_FILTER_TYPE, FilterActionTypes } from "./types";

export const setSearchTerm = (searchTerm: string): FilterActionTypes =>
  ({
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  } as const);

export const setFilterType = (
  filterType: "all" | "favorites"
): FilterActionTypes =>
  ({
    type: SET_FILTER_TYPE,
    payload: filterType,
  } as const);
