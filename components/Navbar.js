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
                <h2 class="app-title">Helpdesk Management</h2>
                <img src="./res/img/logo-desktop.png"/>
                <button  onClick={() => { this.openSidebarFilters() }}class="btn-filters">
                    <Icon name="filter" color="#fff"></Icon>
                </button>
            </div>;
    }
}