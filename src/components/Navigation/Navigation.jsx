//react import 
import react from 'react';

import styles from './Navigation.module.css';

class Navigation extends react.Component {
    static styles = styles;
    constructor(props) {
        super(props);

        this.state = {
            children: this.props.children,
        }

    }

    render() {
        return (
            <div className={styles.navigation}>
                {this.state.children}
            </div>
        )
    }
}

Object.assign(Navigation, styles);

export default Navigation