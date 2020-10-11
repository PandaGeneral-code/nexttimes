import { useCallback, useEffect, useContext } from "react";

import { AppContext, setContentScroll, setDrawerVisibility } from "./AppState";

export const useAppHooks = () => {
  const { dispatch, state } = useContext(AppContext);

  useEffect(() => {}, [state.contentScroll]);

  return {
    setContentScroll: useCallback(
      (contentScroll) => dispatch(setContentScroll(contentScroll)),
      [dispatch]
    ),
    setDrawerVisibility: useCallback(
      (drawerVisibility) => dispatch(setDrawerVisibility(drawerVisibility)),
      [dispatch]
    ),
    state,
  };
};
