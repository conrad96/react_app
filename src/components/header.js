import React, {Component} from 'react'
import '../css/styles.css'
class Header extends Component{

    render(){                

        return (
            <header>
                <div className="logo" onClick={ ()=>{ console.log('Clicked here'); }} >Logo</div>
                <center>
                    <input  type="text" />
                </center>
            </header>
        );
    }
}

export default Header;