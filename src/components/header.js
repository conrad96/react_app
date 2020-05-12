import React, {Component} from 'react'
import '../css/styles.css'
class Header extends Component{

    state = {
        keywords: 'Hello'
    }

    changeEvent (event) {
       // console.log(event.target.value);
       this.setState({
           keywords: event.target.value
       })
    }

    render(){                
        console.log(this.state.keywords);
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