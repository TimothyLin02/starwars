import React, { createContext, useState, useEffect } from 'react';

export const StarWarsContext = createContext()

//mvc: model: DOM. view: honestly shows what you have(data)

export const StarWarsContextProvider = (props) => {
    //data: data from service. other components get data from this provider (like central location)
    const [data, setData] = useState(
        {
            items: {},
            url: "",
            details: {}
        }
    )
    useEffect(()=> {
        console.log("Triggered Use Effect in Provider")
    })
    
    return (
        <StarWarsContext.Provider value={data, setData}>
            {props.children}
        </StarWarsContext.Provider>
    )
}
