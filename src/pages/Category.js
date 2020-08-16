import CategoryDetail from "../components/CategoryDetail"
import React from 'react';
import {Link} from 'react-router-dom';

export default function Category({ match }) {
    console.log("Match: "+ JSON.stringify(match))
    return (
        <div>
            <h1>{match.params.name}</h1>
            <CategoryDetail url={`https://swapi.dev/api/${match.params.name}?format=json`}/>
        </div>
    )
}