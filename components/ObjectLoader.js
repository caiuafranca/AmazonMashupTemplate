class ObjectLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        
        let loaderContainerStyle = {
            flex: "1",
            width: this.props.width,
            height: this.props.height
        }

        return <div style={loaderContainerStyle}>

            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
        </div>;
    }
}