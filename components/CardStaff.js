class CardStaff extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {

        let styles = {
            cardContainer: {
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #6C7C92"
            },
            contentContainer: {
                display: "flex",
                flexDirection: "column"
            },
            name: {
                color: "white",
                fontSize: "21px",
                marginBottom: "5px"
            },
            contact: {
                color: "white"
            },
            description: {
                color: "#A1AFC2"
            }
        }

        return <div style={styles.cardContainer}>
            <img src={this.props.picture}/>
            <div style={styles.contentContainer}>
                <span style={styles.name}>{this.props.name}</span>
                <span style={styles.contact}>{this.props.phone} / {this.props.mail}</span>
                <p style={styles.description}>{this.props.description}</p>
            </div>
        </div>;
    }
}