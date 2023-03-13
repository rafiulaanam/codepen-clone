import React, { createContext, useState } from 'react';


export const DataContext = createContext()


const DataProvider = ({ children }) => {

    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [js, setJs] = useState("")


    const data = {
        html,
        setHtml,
        css, setCss,
        js, setJs
    }
    return (
        <>
            <DataContext.Provider value={data}>
                {children}
            </DataContext.Provider>
        </>
    );
};

export default DataProvider;