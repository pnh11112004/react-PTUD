import React  from "react";
import Childcomponet from "./Childcomponent";
class Mycomponent extends React.Component{
    // sum = (a,b) => {
    //     return a + b;
    // }

    state = {
        Name: 'Eric',
        Age: 28,
        Address: 'HCM'
    }

    render(){

        let parent = "this is my parebt";
        return(
            <div>
                My name is: {this.state.Name}<br />
                Address: {this.state.Address}
                <Childcomponet myProp= {parent} ></Childcomponet>
            </div>
        


        );
    }
}
export default Mycomponent;