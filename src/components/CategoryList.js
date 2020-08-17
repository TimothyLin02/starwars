import React from 'react';
import {NavLink} from "react-router-dom"
import useStarWarsContext from '../context/useStarWarsContext'

export default function CategoryList(props) {
    const { data, setData, retrieveItems} = useStarWarsContext()
    
    if (!data.items) {
        retrieveItems(props.url)
    }
    const list = data.items? 
        Object.keys(data.items).map(r => 
            <NavLink key={r} to={`/category/${r}`} className="myButton">
                <button className="btn btn-dark" onClick={()=>setData({...data, url:props.url})}>{r}</button>
            </NavLink>) 
        : []

    return (
        list.length!==0 ? 
        <div>
            <nav className="navbar navbar-dark bg-dark">
                {list}
            </nav>
        </div>
        : <div>No items to display</div>
    )
}
