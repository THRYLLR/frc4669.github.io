// react import 
import react from "react";
import reactDom from "react-dom";


// react component
class App extends react.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };


    }

    render() {
        return (
            <div>
                <TitleBar text = "title bar" />
            </div>
        );
    }
}


class Input extends react.Component {
    constructor(props) {
        super(props);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onKeyDown(event) {
        if (event.key === 'Enter') {
            console.log('Enter key pressed');
            this.props.onSubmit(event.target.value);
        }
    }

    render() {
        return (
            <div>
                <input type="text" onKeyDown={this.onKeyDown}/>
            </div>
        );
    }
}

class TitleBar extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        };

    }

    update(text) {
        this.setState({
            text: text
        });
    }

    render () {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <Input onSubmit = {(t) => {this.update(t)}}/>
            </div>
        );
    }
}





export default App;
