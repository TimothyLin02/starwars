import React from 'react';


function ResultTable(props) {
    console.log(props)
    let infoComponents = props.result.map(
        r => <tr>{props.headers.map(h => <td>{r[h]}</td>)}</tr>
    )
    return(
        <table>
            <thead>
                <tr>{props.headers.map(header => <th>{header}</th>)}</tr>
            </thead>
            <tbody>
                {infoComponents}
            </tbody>
        </table>  
    )
}

export default ResultTable
