class Suporte extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return <div class="page" style={{ backgroundColor: "#546174", color: "white" }}>
            <p>
                A área de BI da ALE tem como objetivo levar agilizadade e acertividade
                na hora da tomada de decisão, a melhora no seu processo de decisão baseado nos dados
                e o que prezamos, use a ferramenta e em caso de algum problema ou sujestão não deixe de nos contactar
                sua ajuda e fundamental para que possamos evoluir com a ferramenta.
            </p>
            <p>Contatos para suporte, dúvidas e/ou sugestões</p>

            <CardStaff name="Sergio Abreu"
                        picture="./res/img/jobs.png"
                        description="Coordenador de BI"
                        phone="Ramal - 5168"
                        mail="sergio.abreu@ale.com.br"></CardStaff>
            
            <CardStaff name="Francinaldo Lima"
                        picture="./res/img/gates.png"
                        description="Assessor de BI"
                        phone="Ramal - 5044"
                        mail="francinaldo.lima@ale.com.br"></CardStaff>
            
            <CardStaff name="Jessica Kimura"
                        picture="./res/img/gates.png"
                        description="Assessor de Dados e Metricas"
                        phone="Ramal - 5114"
                        mail="jessica.kimura@ale.com.br"></CardStaff>
            
            <CardStaff name="José Carlos"
                        picture="./res/img/gates.png"
                        description="Assessor de Dados e Metricas"
                        phone="Ramal - 5103"
                        mail="josecarlos.camara@ale.com.br"></CardStaff>
            
            <CardStaff name="Caiuá França"
                        picture="./res/img/zuckerberg.png"
                        description="Analista de BI"
                        phone="Ramal - 5044"
                        mail="caiua.franca@ale.com.br"></CardStaff>

        </div>
    }

}   