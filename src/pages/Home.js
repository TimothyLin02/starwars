import React from "react";
import CategoryList from '../components/CategoryList'

export default function Home() {
    return (
        <div>
            <h1>Star Wars</h1>
            <CategoryList url="https://swapi.dev/api/?format=json"/>
        </div>
    )
}