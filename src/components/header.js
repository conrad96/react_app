import React, {Component} from 'react'
import '../css/styles.css'
class Header extends Component{

    changeEvent (event) {
        console.log(event.target.value);
    }

    render(){                

        return (
            <header>
                <div className="logo">Logo</div>
                <center>
                    <input  type="text" onChange={ (e)=> {this.changeEvent(e)} } />
                </center>
            </header>
        );
    }
}

export default Header;