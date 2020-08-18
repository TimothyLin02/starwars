import CategoryDetail from "../components/CategoryDetail"
import React from 'react';

export default function Category({ match }) {
    console.log("Match: "+ JSON.stringify(match))
    let url = `https://swapi.dev/api/${match.params.name}`
    return (
        <div>
            <h1>{match.params.name}</h1>
            <CategoryDetail name={match.params.name}/>
        </div>
    )
}