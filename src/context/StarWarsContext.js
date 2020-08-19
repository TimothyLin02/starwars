import React, { createContext, useState, useEffect } from 'react';

export const StarWarsContext = createContext([{}, ()=>{}])

//mvc: model: DOM. view: honestly shows what you have(data)
//model
export const StarWarsContextProvider = (props) => {
    
    useEffect(() => {
        retrieveCategories()
    }, []);// [], component did mount 

    async function retrieveCategories() {
        const response = await fetch(data.rootUrl)
        const values = await response.json()
        setData(prev => ({...prev, categories: values}))
    }

    //data: data from service. other components get data from this provider(central location)
    const [data, setData] = useState(
        {
            rootUrl: "https://swapi.dev/api/?format=json",
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
