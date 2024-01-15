import React from 'react'
import '../../../Styles/Task2.scss'

class Task2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstnum: 0,
            secondnum: 0,
            result: 0,
        };
    }

    getFirstnum = event => {
        this.setState({firstnum: event.target.value})
    }

    getSecondnum = event => {
        this.setState({secondnum:event.target.value})
     }
     
     showresult = () =>{
        const {firstnum , secondnum} = this.state
        if( isNaN(parseInt(firstnum)) || isNaN(parseInt(secondnum))){
            alert("Enter number..")
          console.log(parseInt(firstnum) , parseInt(secondnum))
        }
        else{
        console.log(parseInt(firstnum) + parseInt(secondnum))
        this.setState({result:parseInt(firstnum) + parseInt(secondnum)})
        }
     }

    render () {
        return(
            <div className='add'>
                <h1>Adding Two Numbers</h1>
                <input type="text" onChange={this.getFirstnum}/>
                <input type="text" onChange={this.getSecondnum}/>
                <button onClick={this.showresult}>ADD</button>
                <h3>Result : {this.state.result}</h3>
            </div>
        )
    }
}

export default Task2