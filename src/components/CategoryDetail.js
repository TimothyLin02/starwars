import React from 'react';
import useStarWarsContext from '../context/useStarWarsContext'

export default function CategoryDetail({ name }) {
    const { data, retrieveDetails, categoryPage } = useStarWarsContext()
    let count = null
    let keys = []
    let headers = []
    let body = []
    let prevButton = null
    let nextButton = null
    console.log("data.details",name, data.details[name])
    if (data.details[name] === undefined) {
        console.log("category detail, calling retrieve details")
        retrieveDetails(name)
    }
    else {
        count = data.details[name].count
        keys = Object.keys(data.details[name].results[0])
        headers = keys.map(k => <th>{k}</th>)
        body = data.details[name].results.map(d => <tr>{keys.map(k=><td>{d[k]}</td>)}</tr>)
        prevButton = data.details[name].previous? <button onClick={()=>categoryPage(name, data.details[name].previous)}>previous</button> : null
        nextButton = data.details[name].next? <button onClick={()=>categoryPage(name, data.details[name].next)}>next</button> : null
    }

    return (
        <div>
            <h3>Count: {count}</h3>
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
