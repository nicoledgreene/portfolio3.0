import React from 'react';
import { connect } from 'react-redux';

import { toggleTheme } from '../state/actions';
// import { isDarkMode } from '../state/reducers';

const Switch = ({isDarkMode, toggleTheme}) => {
    return (<div className="switch">
    <label>
        <div className="switch-container" onClick={toggleTheme}>
            <i className="tiny material-icons">wb_sunny</i>
                <input type="checkbox" checked={isDarkMode} onClick={(e) => {e.preventDefault(); toggleTheme()}} />
                <span className="lever"></span>
            <i className="tiny material-icons">brightness_3</i>
        </div>
    </label>
    </div>)
}
                /* onClick={() => dispatch(toggleTheme(!isDarkMode))} /> */
// export default connect(state => ({
//     isDarkMode: state.app.isDarkMode
// }), null)(Switch)

const mapDispatchToProps = {
    toggleTheme,
}

export default connect(
    null,
    mapDispatchToProps
)(Switch)
