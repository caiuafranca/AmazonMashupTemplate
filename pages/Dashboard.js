class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return <div class="page">
            <div class="object-container">
                <CustomKPI app={this.props.app} measure="Count( {$<Priority={'High'}, Status -={'Closed'} >} Distinct %CaseId )" label="High Priority" color="#F93F17"></CustomKPI>
                <CustomKPI app={this.props.app} measure="Count( {$<Priority={'Medium'}, Status -={'Closed'} >} Distinct %CaseId )" label="Medium Priority" color="#FFCF02"></CustomKPI>
                <CustomKPI app={this.props.app} measure="Count( {$<Priority={'Low'}, Status -={'Closed'} >} Distinct %CaseId )" label="Low Priority" color="#276E27"></CustomKPI>
            </div>
            <div class="object-container">
                <QlikObject elementId="opencases_vs_duration" app={this.props.app} objectId="298bbd6d-f23d-4469-94a2-df243d680e0c" height="366px" width="100%"></QlikObject>
                <QlikObject elementId="avg_case_res" app={this.props.app} objectId="a5e0f12c-38f5-4da9-8f3f-0e4566b28398" height="366px" width="100%"></QlikObject>
            </div>
        </div>
    }
}   