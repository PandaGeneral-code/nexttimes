import React, { createContext, useMemo, useReducer } from "react";

export const AppContext = createContext();

const SET_CONTENT_SCROLL = "app/SET_CONTENT_SCROLL";
const SET_DRAWER_VISIBILITY = "app/SET_DRAWER_VISIBILITY";

const initialState = {
  contentScroll: 0,
  drawerVisibility: {
    contact: false,
    menu: true,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTENT_SCROLL:
      return { ...state, contentScroll: action.contentScroll };
    case SET_DRAWER_VISIBILITY:
      return {
        ...state,
        drawerVisibility: {
          ...state.drawerVisibility,
          ...action.drawerVisibility,
        },
      };
    default:
      return state;
  }
};

export const setContentScroll = (contentScroll) => ({
  contentScroll,
  type: SET_CONTENT_SCROLL,
});

export const setDrawerVisibility = (drawerVisibility) => ({
  drawerVisibility,
  type: SET_DRAWER_VISIBILITY,
});

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [memState, memDispatch] = useMemo(() => [state, dispatch], [
    state,
    dispatch,
  ]);

  return (
    <AppContext.Provider value={{ dispatch: memDispatch, state: memState }}>
      {children}
    </AppContext.Provider>
  );
};
