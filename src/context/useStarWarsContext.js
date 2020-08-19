import { useContext} from 'react'
import { StarWarsContext } from "./StarWarsContext"

//manages data. can call service, etc
//children components get data from here
const useStarWarsContext = () => {
    const [data, setData] = useContext(StarWarsContext)

    async function retrieveDetails(name) { 
        console.log("in retrieve details")
        const response = await fetch(data.categories[name])
        const values = await response.json()
        setData(prev => {
            let newData = {...prev.details, [name]: values}
            return (
                {...prev, details: newData}
            )
        })//use previous data instead of data to get latest data
    }

    async function categoryPage(name, url) {
        console.log("in category page")
        const response = await fetch(url)
        const values = await response.json()
        setData(prev => {
            let newData = {...prev.details, [name]: values}
            return (
                {...prev, details: newData}
            )
        })
    }

    return {
        data,
        setData,
        retrieveDetails,
        categoryPage
    }
}

export default useStarWarsContext
