import { FC, FunctionComponent, useReducer } from "react";
import { uiReducer, UIContext } from ".";

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        //*Functions
        openSideMenu,
        closeSideMenu
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
