import React from 'react';
import axios from 'axios';




class CurConverter extends React.Component{
    render(){
        return(
            <div className="conveter">
                <h2>
                    <span>Currency</span>Converter
          <span role="img" aria-label="money">
            &#x1f4b5;
          </span>
                </h2>
                <div className='From'>
                    <input name="amount" type="text" value={this.state.amount} 
                    onChange={event => this.setState({ amount: event.target.value })}
          />
            </div>
        )
    }
}



export default CurConverter;