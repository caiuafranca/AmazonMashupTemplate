
var browserHistory = ReactRouter.browserHistory;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarNavOpened: false,
            sidebarFiltersOpened: false,
            activePage: browserHistory.getCurrentLocation().hash
        };
    }

    componentDidMount() {

        window.onresize = () => {
            var allCharts = document.querySelectorAll(".custom-echart");
            allCharts.forEach((element) => {
                let chartId = element.getAttribute("_echarts_instance_");
                echarts.getInstanceById(chartId).resize();
            });
        };

        browserHistory.listen((res) => {
            this.setState({
                sidebarNavOpened: false,
                sidebarFiltersOpened: false,
                activePage: res.hash
            })
        });
    }

    onMessage(message) {
        this.setState(message);
    }

    render() {

        let fadeActive = false;
        let qlikObjects = [];
        let page = "";
        let pageTitle = "...";
        let sidebarFilter = "";

        if(this.state.sidebarNavOpened || this.state.sidebarFiltersOpened) {
            fadeActive = true;
        }

        if(this.state.app) {
            sidebarFilter = <SidebarFilters opened={this.state.sidebarFiltersOpened}
                            app={this.state.app}
                            _onCloseSidebarFilters={(message) => { this.onMessage(message)}}></SidebarFilters>;

            switch(this.state.activePage) {
                case "#dashboard":
                    pageTitle = "Dashboard";
                    page = <Dashboard app={this.state.app}></Dashboard>;
                    break;
                case "#performance":
                    pageTitle = "Performance";
                    page = <Performance app={this.state.app}></Performance>;
                    break;
                case "#case-details":
                    pageTitle = "Case Details";
                    page = <CaseDetails app={this.state.app}></CaseDetails>;
                    break;
                case "#suporte":
                    pageTitle = "Suporte";
                    page = <Suporte></Suporte>;
                    break;
                default:
                    window.location.hash = "#dashboard";
                    this.setState({activePage: "#dashboard"})
                    break;
            }
        } else {
            page = <Loader></Loader>;
        }

        return <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <QlikConnection _onConnectionSuccessful={(message) => { this.onMessage(message)}}></QlikConnection>
            <Fade active={fadeActive} _onCloseSidebar={(message) => { this.onMessage(message) }}></Fade>
            <Navbar
                _onOpenSidebarNav={(message) => { this.onMessage(message) }}
                _onOpenSidebarFilters={(message) => { this.onMessage(message) }}
                ></Navbar>
            <PageHeader pageTitle={pageTitle} activePage={this.state.activePage}></PageHeader>
            <SidebarNav opened={this.state.sidebarNavOpened} activePage={this.state.activePage}></SidebarNav>
            
            {sidebarFilter}
            {page}

        </div>;
    }
}

const domContainer = document.querySelector('#mashup');
ReactDOM.render(<App/>, domContainer);