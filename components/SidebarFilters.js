class SidebarFilters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selections: []
        };
    }

    componentDidMount(){

        this.props.app.getObject("filters", "ycppXj");

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
            sidebarTitle: {
                fontSize: "16px"
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
                border: "none",
                marginTop: "18px",
                marginBottom: "18px",
                cursor: "pointer"
            },
            selectionsContainer: {
                height: "146px",
                backgroundColor: "#262B3D",
                overflow: "auto"
            },
            selectionItem: {
                marginBottom: "10px",
                marginTop: "5px"
            },
            selectionContainer: {
                display: "flex",
                alignItems: "center",
                background: "#FF9900",
                color: "white",
                fontFamily: "Roboto",
                fontSize: "12px",
                padding: "2px 6px",
                justifyContent: "space-between"
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
            clearFieldButton: {
                background: "transparent",
                border: "none",
                cursor: "pointer"
            },
            closeButton: {
                background: "transparent",
                border: "none",
                cursor: "pointer"
            },
            filters: {
                height: "240px",
                width: "100%"
            },
            emptySelectionsContainer: {
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                height: "100%"
            }
        }

        let selectionElements = [];
        let selectionList = "";

        if(this.state.selections.length > 0) {
            for(var i = 0; i < this.state.selections.length; i++)  {
                let fieldName = this.state.selections[i].qField;
                let selectionsString = this.state.selections[i].qSelected;

                selectionElements.push(<li style={styles.selectionItem}>
                                <span style={styles.fieldName}>{fieldName}</span>
                                <div style={styles.selectionContainer}>
                                    <span class="selection-value">{selectionsString}</span>
                                    <button class="clear-selection" style={styles.clearFieldButton} onClick={() => { this.props.app.field(fieldName).clear() }}>
                                        <Icon name="close" color="white"></Icon>
                                    </button>
                                </div>
                            </li>)
            }

            selectionList = <ul class="selections-list">{selectionElements}</ul>;

        } else {
            selectionList = <div style={styles.emptySelectionsContainer}><span>NENHUM FILTRO APLICADO</span></div>;
        }   
        
        return (
            <div className={this.props.opened ? "sidebar-filters opened" : "sidebar-filters"}>

                {/* HEADER */}
                <div class="sidebar-header" style={styles.sidebarHeader}>
                    <span style={styles.sidebarTitle}>Seleções atuais</span>
                    <button style={styles.closeButton} onClick={() => { this.props._onCloseSidebarFilters({sidebarFiltersOpened: false}) }}>
                        <Icon name="close" color="white"></Icon>
                    </button>
                </div>
                
                
                {/* SELECOES ATUAIS */}
                <div style={styles.selectionsContainer}>
                    {selectionList}
                </div>

                <button style={styles.clearButton} onClick={ () => { this.props.app.clearAll() }}>LIMPAR</button>

                {/* OBJETO QLIK DE FILTROS */}
                <div id="filters" style={styles.filters}></div>

            </div>
        );
    }
}