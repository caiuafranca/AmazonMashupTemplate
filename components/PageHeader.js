class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        return <div class="page-header">
                <h2 class="page-title">{this.props.pageTitle}</h2>
                <div class="header-navigation">
                    <ul class="navigation-list">
                        <li class="navigation-item">
                            <a className={this.props.activePage == "#dashboard" ? "navigation-link active" : "navigation-link"} href="#dashboard">
                                <Icon name="piechart" color="#A1AFC2"></Icon>
                                Dashboard
                            </a>
                        </li>
                        <li class="navigation-item">
                            <a className={this.props.activePage == "#performance" ? "navigation-link active" : "navigation-link"} href="#performance">
                                <Icon name="linechart" color="#A1AFC2"></Icon>
                                Performance
                            </a>
                        </li>
                        <li class="navigation-item">
                            <a className={this.props.activePage == "#case-details" ? "navigation-link active" : "navigation-link"} href="#case-details">
                                <Icon name="table" color="#A1AFC2"></Icon>
                                Case Details
                            </a>
                        </li>
                        <li class="navigation-item">
                            <a className={this.props.activePage == "#suporte" ? "navigation-link active" : "navigation-link"} href="#suporte">
                                <Icon name="support" color="#A1AFC2"></Icon>
                                Suporte
                            </a>
                        </li>
                    </ul>
                </div>
            </div>;
    }
}