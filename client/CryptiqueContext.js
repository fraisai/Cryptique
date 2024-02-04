// Context API consists of two main components: the context provider and the context consumer. The provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.
/*
    1. Create a Context Object with a default value using the createContext method
        - context object holds the data to be shared across components
        - in a separate file, import the createContext method from react and type <export const MyContext = createContext({})>
        - Code:
            import { createContext } from 'react';
            export const MyContext = createContext({})

    2. Wrap Provider around child components that need to access the shared data in the context object using <MyContext.Provider value={} > in the Parent component file
        - Provider accepts a prop called "value" that holds the shared data
        - Any compoent that is a CHILD of the Provider component can access that shared data defined in value
        - Code in top most parent component (App.jsx):
            import { MyContext } from './MyContext';
            < MyContext.Provider value={ {state, setState} }> <ChildComponent /> </ MyContext.Provider>

    3. Consume the context in the child components of the provider component by using the useContext Hook and initializing it with MyContext object
        - Code:
        function ChildComponent() {
             import MyContext from './MyContext';    
            const {state, setState} = useContext(MyContext);

            return (
                <div>
                    <h1>{state}</h1>
                    <button onClick={() => setState("HELLO")} >
                        Click
                    </button>
                </div>
            )
        }
           
*/


import { createContext } from "react";

export const CryptiqueContext = createContext(""); // context object            



