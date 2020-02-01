import React from 'react';
import Switch from './switch';
import M from "materialize-css";

class Nav extends React.Component {
    componentDidMount() {
        M.AutoInit();
    }
    render () {
        return (
            <div className="top-nav">
                <Switch />
            </div>
        )
    }
}

export default Nav