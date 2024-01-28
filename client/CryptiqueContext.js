// Context API consists of two main components: the context provider and the context consumer. The provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.
/*
1. Create a Context Object: context object holds the data to be shared across components
2. Wrap Components with a Provider: wrap the components that need access to the shared data with a Provider component

*/


import { createContext } from "react";

export const CryptiqueContext = createContext(""); // context object



/*
import { useContext } from 'react';
import { CryptiqueContext } from './CryptiqueContext.js';


in component:
const value = useContext(CryptiqueContext);
*/