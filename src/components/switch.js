import React from 'react';
import { connect } from 'react-redux';

import { toggleDarkMode, isDarkMode } from '../state/app';

const Switch = ({isDarkMode, dispatch}) => {
    return (<div className="switch">
    <label>
        <div className="switch-container">
            <i className="tiny material-icons">wb_sunny</i>
                <input type="checkbox" checked={isDarkMode}
                onClick={() => dispatch(toggleDarkMode(!isDarkMode))} />
                <span className="lever"></span>
            <i className="tiny material-icons">brightness_3</i>
        </div>
    </label>
    </div>)
}

export default connect(state => ({
    isDarkMode: state.app.isDarkMode
}), null)(Switch)