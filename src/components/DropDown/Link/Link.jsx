
import react from 'react';

import styles from './Link.module.css';

class Link extends react.Component {
    static styles = styles;
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <a href={this.props.href} className={styles.link}>
                {this.props.children}
            </a>
        );
    }
}

export default Link;