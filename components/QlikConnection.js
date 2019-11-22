class QlikConnection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount (){
        //requisitar o Qlik
        this.openQlikConnection();
    }


    openQlikConnection() {
        
        var config = {
            host: window.location.hostname,
            prefix: window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 ),
            port: window.location.port,
            isSecure: window.location.protocol === "https:"
        };

        require.config( {
            baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
        });

        require(["js/qlik"], (qlik) => {
            let app = qlik.openApp("Helpdesk Management-Mashup.qvf", config);
            window.app = app;
            this.props._onConnectionSuccessful({
                app: app
            });
        })

    }

    render() {
        return "";
    }

}