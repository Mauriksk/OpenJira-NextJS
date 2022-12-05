import { FC, PropsWithChildren, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { entriesReducer, EntriesContext } from ".";
import { Entry } from "../../interfaces";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "pending Ullamco ex culpa eiusmod magna fugiat velit id dolore.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Ain-progress met sunt cillum ex in esse qui commodo sunt elit nulla.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "finished Consequat dolore dolore nostrud enim ipsum.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider:FC<PropsWithChildren> = ({ children }: any) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
