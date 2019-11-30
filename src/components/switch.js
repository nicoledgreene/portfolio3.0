import React from 'react';
import M from "materialize-css";

class Switch extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    
    render () {
        return (
            <div className="switch">
            <label>
                <div className="switch-container">
                    <i className="tiny material-icons">wb_sunny</i>
                        <input type="checkbox" />
                        <span className="lever"></span>
                    <i className="tiny material-icons">brightness_3</i>
                </div>
            </label>
          </div>
        )
    }
}

export default Switch