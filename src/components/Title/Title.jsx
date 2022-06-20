import react from 'react';
import styles from './Title.module.css';

class Title extends react.Component {
    static styles = styles;
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.title}>
                <div className='spacer'></div>
                <div className={styles.center}>
                    {this.props.children}
                </div>
                <div className='spacer'></div>
            </div>
        );
    }
}

Object.assign(Title, styles);

export default Title;