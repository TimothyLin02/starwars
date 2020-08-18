import { useContext, useEffect } from 'react'
import { StarWarsContext } from "./StarWarsContext"

//manages data. can call service, etc
//children components get data from here
const useStarWarsContext = () => {
    const [data, setData] = useContext(StarWarsContext)
    
    useEffect(() => {
        retrieveCategories()
    }, []);// [], component did mount 

    async function retrieveCategories() {
        //console.log("in retrieve categories", data)
        const response = await fetch(data.rootUrl)
        const values = await response.json()
        //console.log("recieved",values)
        setData({...data, categories: values})
    }

    async function retrieveDetails(name) { 
        console.log("in retrieve details")
        const response = await fetch(data.categories[name])
        const values = await response.json()
        setData({...data, category: name, details: values})
    }

    async function categoryPage(url) {
        console.log("in category page")
        const response = await fetch(url)
        const values = await response.json()
        setData({ ...data, details: values })
    }

    return {
        data,
        setData,
        retrieveDetails,
        categoryPage
    }
}

export default useStarWarsContext
