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
        
        const style = {
            background: '#ff4545'
        }
        
        return (
            <header style={style} >
                <div className="logo">Logo</div>
                <center>
                    <input  type="text" onChange={this.changeEvent} />
                </center>                
            </header>
        );
    }
}

export default Header;