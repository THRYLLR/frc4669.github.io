
class navigation extends react.Component {

    constructor(props) {
        super(props);

        this.state = {
            children = this.props.children,
        }

    }

    add(node) {
        this.setState({
            
        })
    }

    render() {
        return (
            <div classname = "navigation">
                {this.state.children}
            </div>
        )
    }
}


