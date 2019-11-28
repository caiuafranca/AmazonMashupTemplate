class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        
        let loaderContainerStyle = {
            position: "fixed",
            zIndex: "10",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "0",
            right: "0",
            left: "0",
            bottom: "0"
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