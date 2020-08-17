import React, { useState } from 'react'
import useStarWarsContext from '../context/useStarWarsContext'

export default function AnyComponent(props) {
    const { data, setData, previous } = useStarWarsContext() //can pick anything you want to use in {}
    
    if (data.category == null) {
        previous(data.category.name, data.category.url)
    }
    
    let prevButton = data.category.previous ? 
        <button onClick={previous(data.category.name, data.categpry.url)}>previous</button> :
        <div></div>

    return (
        <Fragment>
            <div>{prevButton}</div>
            <div>anything</div>
            <div>anything</div>    
        </Fragment>
    )
}
