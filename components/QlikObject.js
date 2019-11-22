class QlikObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        this.props.app.getObject(this.props.elementId, this.props.objectId);
    }

    render() {
        return <div id={this.props.elementId} class="qlik-mashup-object" style={{ height: this.props.height, width: this.props.width }}></div>;
    }
}