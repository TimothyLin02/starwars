import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import React from 'react';

export default function CategoryList(props) {
    
    useEffect( () => {
        retrieveItems();
    }, [])

    const [items, setItems] = useState({})

    console.log(props)
    const retrieveItems = async () => {
        let response = await fetch(props.url)
        let data = await response.json()
        console.log(data)
        setItems(data)
    }

    const list = Object.keys(items).map(r=><Link key={r} to={`/category/${r}`} className="myButton"><button className="btn btn-dark">{r}</button></Link>)

    return (
        list.length!==0 ? <div>{list}</div> : <div>No items to display</div>
    )
}
