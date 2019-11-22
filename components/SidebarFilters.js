class SidebarFilters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selections: []
        };
    }

    componentDidMount(){

        this.props.app.getObject("filters", "mQGMhh");

        this.props.app.getList('CurrentSelections', (data) => {
            let selectionsArray = data.qSelectionObject.qSelections;
            this.setState({selections: selectionsArray})
        })
    }

    render() {

        let styles = {
            sidebarHeader: {
                display: "flex",
                alignItems: "center",
                height: "40px",
                justifyContent: "space-between",
                fontFamily: "Roboto",
                color: "white"
            },
            clearButton: {
                backgroundColor: "#FFCA47",
                fontFamily: "Roboto",
                color: "#3E3E3E",
                borderRadius: "3px",
                fontSize: "14px",
                width: "100%",
                height: "35px",
                fontWeight: "bold",
                border: "none"
            },
            selectionsContainer: {
                height: "146px",
                backgroundColor: "#262B3D",
                overflow: "auto"
            },
            selectionContainer: {
                display: "flex",
                alignItems: "center",
                background: "orange",
                color: "white",
                fontFamily: "Roboto",
                fontSize: "12px",
                padding: "6px"
            },
            fieldName: {
                fontSize: "12px",
                fontFamily: "Roboto",
                color: "#88919C",
                padding: "6px"
            },
            clearSelection: {
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer"
            },
            filters: {
                height: "300px",
                width: "100%"
            }
        }


        let selectionElements = [];

        if(this.state.selections.length > 0) {
            for(var i = 0; i < this.state.selections.length; i++)  {
                let fieldName = this.state.selections[i].qField;
                let selectionsString = this.state.selections[i].qSelected;

                selectionElements.push(<li class="selections-item">
                                <span style={styles.fieldName}>{fieldName}</span>
                                <div style={styles.selectionContainer}>
                                    <span class="selection-value">{selectionsString}</span>
                                    <button class="clear-selection" onClick={() => { this.props.app.field(fieldName).clear() }}>X</button>
                                </div>
                            </li>)
            }
        } else {
            selectionElements = "NENHUM FILTRO APLICADO";
        }   
        
        return (
            <div className={this.props.opened ? "sidebar-filters opened" : "sidebar-filters"}>

                {/* HEADER */}
                <div class="sidebar-header" style={styles.sidebarHeader}>
                    <span>Seleções atuais</span>
                    <button onClick={() => { this.props._onCloseSidebarFilters({sidebarFiltersOpened: false}) }}>X</button>
                </div>
                
                
                {/* SELECOES ATUAIS */}
                <div style={styles.selectionsContainer}>
                    <ul class="selections-list">
                        {selectionElements}
                    </ul>
                </div>

                <button style={styles.clearButton} onClick={ () => { this.props.app.clearAll() }}>LIMPAR</button>

                {/* OBJETO QLIK DE FILTROS */}
                <div id="filters" style={styles.filters}></div>

            </div>
        );
    }
}