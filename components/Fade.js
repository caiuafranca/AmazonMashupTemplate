class Fade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){}

    closeSidebar(){
        this.props._onCloseSidebar({
            sidebarNavOpened: false,
            sidebarFiltersOpened: false
        });
    }

    render() {
        return <div onClick={() => { this.closeSidebar() }} className={this.props.active ? "fade active" : "fade"}></div>;
    }
}