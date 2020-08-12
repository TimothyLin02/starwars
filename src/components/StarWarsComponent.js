import React from 'react';
import Button from './Button';
import ResultTable from './ResultTable';


function StarWarsComponent(props) {
    const categoryButtons = props.categories.map(
      (cat, i) => <Button key={i} src={props.srcs[i++]} handleClick={props.handleClick} val={cat}/>
    )
    
    let navButtons = []
    let resultTable = null
    if (props.showTable) {
      navButtons = [
        <Button src={props.data.previous} handleClick={props.handleClick} val="previous"/>,
        <Button src={props.data.next} handleClick={props.handleClick} val="next"/>
      ];
      resultTable = <ResultTable headers={Object.keys(props.data.results[0])} result={props.data.results}/>
    }

    return(
        <div>
          <h1>Star Wars</h1>
          {categoryButtons}
          {props.showTable?
            <div>
              <p>Count: {props.data.count}</p>
              {navButtons}
              {resultTable}
            </div>
            :null}
        </div>
    )
}

export default StarWarsComponent;
