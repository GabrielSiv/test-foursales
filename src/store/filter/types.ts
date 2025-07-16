export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const SET_FILTER_TYPE = "SET_FILTER_TYPE";

export interface FilterState {
  searchTerm: string;
  filterType: "all" | "favorites";
}

export interface SetSearchTermAction {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}

export interface SetFilterTypeAction {
  type: typeof SET_FILTER_TYPE;
  payload: "all" | "favorites";
}

export type FilterActionTypes = SetSearchTermAction | SetFilterTypeAction;
