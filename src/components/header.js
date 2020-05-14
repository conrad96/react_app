import React, {Component} from 'react'
import '../css/styles.css'
class Header extends Component{    

    constructor(props) {
        super(props);       
    }

    changeEvent  = (event) => {
       // console.log(event.target.value);
       this.setState({
           keywords: event.target.value
       })
    }

    render(){                
        
        return (
            <header>
                <div className="logo">Logo</div>
                <center>
                    <input  type="text" onChange={this.changeEvent} />
                </center>                
            </header>
        );
    }
}

export default Header;