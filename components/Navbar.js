class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        //navbar foi instanciada
    }

    openSidebarNav(){
        this.props._onOpenSidebarNav({sidebarNavOpened: true});
    }

    openSidebarFilters(){
        this.props._onOpenSidebarFilters({sidebarFiltersOpened: true});
    }

    render() {
        return <div class="navbar">
                <button onClick={() => { this.openSidebarNav() }} class="btn-menu">
                    <Icon name="burger" color="#fff"></Icon>
                </button>
                <h2 class="app-title">BI - Nome do APP</h2>
                <img src="./res/img/logo_ale__horizontal.png" width="100" heigth="150"/>
                <button  onClick={() => { this.openSidebarFilters() }}class="btn-filters">
                    <Icon name="filter" color="#fff"></Icon>
                </button>
            </div>;
    }
}