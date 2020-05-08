import React, {Component} from 'react'
import '../css/styles.css'
class Header extends Component{

    render(){                

        return (
            <header>
                <div className="logo">Logo</div>
                <center>
                    <input  type="text" />
                </center>
            </header>
        );
    }
}

export default Header;