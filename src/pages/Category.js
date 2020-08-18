import CategoryDetail from "../components/CategoryDetail"
import useStarWarsContext from '../context/useStarWarsContext'
import PageNotFound from './PageNotFound';
import React from 'react';

export default function Category({ match }) {
    const { data, setData, retrieveDetails, categoryPage } = useStarWarsContext()
    console.log("Match: "+ JSON.stringify(match))
    let url = `https://swapi.dev/api/${match.params.name}`
    return (
        Object.keys(data.categories).includes(match.params.name) ?
        <div>
            <h1>{match.params.name}</h1>
            <CategoryDetail name={match.params.name}/>
        </div> :
        <div>{PageNotFound()}</div>
    ) 

}