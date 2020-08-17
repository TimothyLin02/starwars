import React from 'react';
import useStarWarsContext from '../context/useStarWarsContext'

export default function CategoryDetail({ url }) {
    const { data, setData, retrieveDetails } = useStarWarsContext()
    console.log("url: "+url)
    //console.log(data.details)
    console.log("data.url: "+ data.url)
    //console.log(data)
    if (url !== data.url) {
        setData({...data, url: url})
    }
    
    let prevButton = data.details ? 
        <button onClick={()=>setData({...data, url: data.details.previous})}>previous</button> 
        : null
    
    let nextButton = data.details ? 
        <button onClick={()=>setData({...data, url: data.details.next})}>next</button> 
        : null

    console.log(data.details)
    const keys = data.details? Object.keys(data.details.results[0]) : null
    const headers = keys? keys.map(k => <th>{k}</th>) : null
    const body = keys? data.details.results.map(d => <tr>{keys.map(k=><td>{d[k]}</td>)}</tr>) : null

    return (
        <div>
            <h3>Count: {data.details? data.details.count: null}</h3>
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