import React, { useState, useEffect } from 'react'
import { StarWarsContext } from "./StarWarsContext"

//manages data. can call service, etc
//children components get data from here
export default function useStarWarsContext() {
    const [data, setData] = useState(StarWarsContext)
    
    useEffect(() => {
        console.log("in use effect")
        //setData({...data, details:null})
        retrieveDetails()
    }, []);

    async function retrieveDetails() { 
        console.log("in retrieve details")
        const response = await fetch(data.url)
        const values = await response.json()
        setData({...data, details: values})
        console.log(data.details)
    }

    async function retrieveItems(url) {
        console.log("in retrieve items")
        let response = await fetch(url)
        let values = await response.json()
        setData({...data, items: values})
    }
    /*
    async function previous(url) {
        const response = await fetch(url)
        const values = await response.json()

        let newData = { ...data, values }
        //merge values into your newData

        setData(newData)
    }*/

    return {
        data,
        setData,
        retrieveItems,
        retrieveDetails
    }
}
