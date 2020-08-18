import React from 'react';
import useStarWarsContext from '../context/useStarWarsContext'

export default function CategoryDetail({ name }) {
    const { data, setData, retrieveDetails, categoryPage } = useStarWarsContext()
    if (Object.keys(data.categories).length > 0) {
        if (Object.keys(data.details).length === 0) {
            retrieveDetails(name)
        }
        else if (name !== data.category) {
            setData({...data, category: name, details: {}})
        }
    }
    
    let keys = Object.keys(data.details).length !==0? Object.keys(data.details.results[0]) : []
    let headers = keys.map(k => <th>{k}</th>)
    console.log("details",data.details)
    if (keys.length !== 0) {
        console.log("results",data.details.results);
    }
    let body = keys.length !== 0? data.details.results.map(d => <tr>{keys.map(k=><td>{d[k]}</td>)}</tr>) : []
    let prevButton = data.details.previous? <button onClick={()=>categoryPage(data.details.previous)}>previous</button> : <div></div>
    let nextButton = data.details.next? <button onClick={()=>categoryPage(data.details.next)}>next</button> : <div></div>
        
    console.log("keys",keys)
    console.log("headers", headers)
    console.log("body", body)

    return (
        <div>
            <h3>Count: {data.details.count}</h3>
            <div>{prevButton}{nextButton}</div>
            <table>
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    )
}
