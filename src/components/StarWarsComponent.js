import React from 'react';
import Button from './Button';
import ResultTable from './ResultTable';


function StarWarsComponent(props) {
    let i = 0;
    const categoryButtons = props.categories.map(
      cat => <Button key={i} src={props.srcs[i++]} handleClick={props.handleClick} val={cat}/>
    )
  
    if (props.showTable) {
      var navButtons = [
        <Button src={props.data.previous} handleClick={props.handleClick} val="previous"/>,
        <Button src={props.data.next} handleClick={props.handleClick} val="next"/>
      ];
      var resultTable = <ResultTable headers={Object.keys(props.data.results[0])} result={props.data.results}/>
    }

    return(
        <div>
            <h1>Star Wars</h1>
            {categoryButtons}
            {props.showTable?<p>Count: {props.data.count}</p>:null}
            {navButtons}
            {resultTable}
        </div>
    )
}

export default StarWarsComponent;
