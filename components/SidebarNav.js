class SidebarNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
    }

    render() {
        
        return (
            <div className={this.props.opened ? "sidebar-nav opened" : "sidebar-nav"}>
                <div class="sidebar-header">
                <img src="./res/img/logo_ale__horizontal.png" width="70" heigth="100"/>
                <h1 class="app-title">Nome APP</h1>
                </div>
                <div class="sidebar-navigation">
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
               
            </div>
        );
    }
}