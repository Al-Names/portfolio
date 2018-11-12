import React, { Component } from 'react';



class X extends Component {

    promptCopyright(){
        alert("Copyright Al-M x Names by Mustapha Saeed")
    }
  render() {
    return (
        <div onClick={this.promptCopyright} >
            <h1 id= "X">X</h1>
        </div>
    )
    }

}


export default X;