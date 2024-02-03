// Context API consists of two main components: the context provider and the context consumer. The provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.
/*
1. Create a Context Object with a default value: (export const MyContext = createContext({}) )
    - context object holds the data to be shared across components
2. Wrap child Components with a Provider: wrap the components that need access to the shared data with a Provider component
    - 
3. Pass your context to the useContext(MyContext) hook to read it in any child component no matter how deep
    - const val = useContext(MyContext)
*/


import { createContext } from "react";

export const CryptiqueContext = createContext(""); // context object



/*
import { useContext } from 'react';
import { CryptiqueContext } from './CryptiqueContext.js';


in component:
const value = useContext(CryptiqueContext);
*/