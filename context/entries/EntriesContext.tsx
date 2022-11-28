import { createContext } from 'react';

interface ContextProps {
    entries: [];//! Falta el tipo de dato 
}

export const EntriesContext = createContext({} as ContextProps);