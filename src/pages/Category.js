import CategoryDetail from "../components/CategoryDetail"
import React from 'react';
import useStarWarsContext from '../context/useStarWarsContext'

export default function Category({ match }) {
    //console.log("Match: "+ JSON.stringify(match))
    const { data, setData, retrieveDetails } = useStarWarsContext()
    let url = `https://swapi.dev/api/${match.params.name}`
    /*console.log(url !== data.url)
    if (url !== data.url) {
        setData({...data, url: url})
    }*/
    return (
        <div>
            <h1>{match.params.name}</h1>
            <CategoryDetail url={url}/>
        </div>
    )
}