import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function CategoryDetail({ url }) {

    useEffect(() => {
        retrieveDetails()
    }, [])
    
    const [details, setDetails] = useState([{}])
    const [count, setCount] = useState()
    const [next, setNext] = useState()
    const [prev, setPrev] = useState()

    const retrieveDetails = async () => {
        console.log("in retrieveDetails")
        console.log(url)
        const response = await fetch(url)
        const data = await response.json() 
        console.log(data)
        setDetails(data.results)
        setNext(data.next)
        setPrev(data.previous)
        setCount(data.count)
        
        console.log("next: " + next)
        console.log("prev: " + prev)
    }

    const keys = Object.keys(details[0])
    const headers = keys.map(k => <th>{k}</th>)
    const body = details.map(d => <tr>{keys.map(k=><td>{d[k]}</td>)}</tr>)

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=> {
                url=prev
                retrieveDetails()
            }}>Previous</button>
            <button onClick={()=> {
                url=next
                retrieveDetails()
            }}>Next</button>
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