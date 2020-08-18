import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext([{}, ()=>{}])

//mvc: model: DOM. view: honestly shows what you have(data)

export const StarWarsContextProvider = (props) => {
    //data: data from service. other components get data from this provider(central location)
    const [data, setData] = useState(
        {
            rootUrl: "https://swapi.dev/api/?format=json",
            category: "",
            categories: {},
            details: {}
        }
    )
    
    return (
        <StarWarsContext.Provider value={[data, setData]}>
            {props.children}
        </StarWarsContext.Provider>
    )
}
