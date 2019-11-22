class Icon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.icons = {
            filter: "M10,18h4V16H10ZM3,6V8H21V6Zm3,7H18V11H6Z",
            burger: "M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z",
            piechart: "M11,2V22A10.056,10.056,0,0,1,11,2Zm2.03,0v8.99H22A10.044,10.044,0,0,0,13.03,2Zm0,11.01V22A10.035,10.035,0,0,0,22,13.01Z",
            linechart: "M3.5,18.49l6-6.01,4,4L22,6.92,20.59,5.51,13.5,13.48l-4-4L2,16.99Z",
            table: "M10,10.02h5V21H10ZM17,21h3a2.006,2.006,0,0,0,2-2V10H17ZM20,3H5A2.006,2.006,0,0,0,3,5V8H22V5A2.006,2.006,0,0,0,20,3ZM3,19a2.006,2.006,0,0,0,2,2H8V10H3Z",
            support: "M11.5,2a8.5,8.5,0,0,0,0,17H12v3c4.86-2.34,8-7,8-11.5A8.506,8.506,0,0,0,11.5,2Zm1,14.5h-2v-2h2Zm0-3.5h-2c0-3.25,3-3,3-5a2,2,0,0,0-4,0h-2a4,4,0,0,1,8,0C15.5,10.5,12.5,10.75,12.5,13Z" 
        }
    }

    componentDidMount() {
        
    }

    render() {
        return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0,0H24V24H0Z" fill="none"/>
            <path class="icon" d={this.icons[this.props.name]} fill={this.props.color}/>
        </svg>;
    }
}