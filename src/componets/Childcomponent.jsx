import React from "react";
class Childcomponet extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            valueInput: ''
        }
    }
    handleInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }

    handleOnChangeInput = (event) =>{
        this.state({
            Name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <>
                <form action="" onSubmit = {(event) => this.handleOnSubmit(event)}>
                    <input  type="text" 
                        value={this.state.Name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                    /> <br></br>
                    <button>Submit</button>
                </form>
                <span>{this.state.valueInput}</span>
            </>
        );
            
    }
}
export default Childcomponet;