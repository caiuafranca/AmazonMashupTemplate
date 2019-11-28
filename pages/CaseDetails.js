class CaseDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return <div class="page">
            <QlikObject elementId="avgcase" app={this.props.app} objectId="rJFbvG" height="400px" width="100%"></QlikObject>
        </div>
    }
}   