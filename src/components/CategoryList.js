import React from 'react';
import {Link} from "react-router-dom"
import useStarWarsContext from '../context/useStarWarsContext'

export default function CategoryList() {
    const { data } = useStarWarsContext()
    //console.log("category List",data)

    const list = Object.keys(data.categories).map(r => 
        <Link key={r} to={`/category/${r}`} className="btn btn-dark myButton">{r}</Link>) 

    return (
        list.length !== 0 ? 
        <div>
            <nav className="navbar navbar-dark bg-dark">
                {list}
            </nav>
        </div>
        : <div>No items to display</div>
    )
}
