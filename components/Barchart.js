class Barchart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.ref = React.createRef();
    }

    componentDidUpdate() {
        if(this.state.data) {
            this.renderChart();
        }
    }

    componentDidMount() {

        // CRIAR UM HIPERCUBO COM OS DADOS DO GRÁFICO "Open & Resolved Cases Over Time", QUE ESTÁ EM DASHBOARD (NO QVF)
        this.props.app.createCube(this.props.hypercubeDefinition, (response) => {
            var matrix = response.qHyperCube.qDataPages[0].qMatrix;
            var measuresInfo = response.qHyperCube.qMeasureInfo;

            /*
                ESPECIFICACAO DOS DADOS NECESSARIOS
                - titulo do grafico 
                - legendas
                - dimensao: {
                    name: "",
                    data: []
                }
                - medidas: [
                    {
                        name: "",
                        data: []
                    }
                ]
            */

            var data = {
                measures: [],
                dimension: {
                    name: response.qHyperCube.qDimensionInfo[0].qFallbackTitle,
                    data: matrix.map((item) => { return item[0].qText})
                }
            }

            var measures = response.qHyperCube.qMeasureInfo;
            for(var i = 1; i <= measures.length; i++){
                let name = measures[i-1].qFallbackTitle;
                let measureArray = matrix.map((item) => { return item[i].qText})
                let measureData = {
                    name: name,
                    data: measureArray
                }
                data.measures.push(measureData);
            }

            this.setState({
                data: data
            })

            
        });
    }

    renderChart() {
        var myChart = echarts.init(this.ref.current);

        // {
        //     name: STRING,
        //     type: 'bar',
        //     data: ARRAY,
        //     animationDelay: function (idx) {
        //         return idx * 10;
        //     }
        // }

        var series = this.state.data.measures.map((measure) => {
            return {
                name: measure.name,
                type: "bar",
                data: measure.data,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }
        })

        var option = {
            legend: {
                data: this.state.data.measures.map((measure) => { return measure.name }),
                align: 'left'
            },
            dataZoom: [
                {
                    id: 'dataZoomX',
                    type: 'slider',
                    xAxisIndex: [0],
                    filterMode: 'filter'
                },
                {
                    id: 'dataZoomY',
                    type: 'slider',
                    yAxisIndex: [0],
                    filterMode: 'empty'
                }
            ],
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled', 'bar', 'line'],
                        title: {
                            bar: "Barras",
                            line: "Linhas",
                            stack: "Stack",
                            tiled: "Tiled"
                        }
                    },
                    dataZoom: {
                        title: {
                            zoom: "Zoom",
                            back: "Voltar zoom"
                        },
                        yAxisIndex: 'none'
                    },
                    restore: {
                        title: "Restaurar"
                    },
                    dataView: {
                        title: "DataView"
                    },
                    saveAsImage: {
                        title: "Salvar imagem",
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: this.state.data.dimension.data,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: series,
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };

        myChart.on('click', (params) => {
            this.props.app.field(this.state.data.dimension.name).selectMatch(params.name);
        });

        myChart.setOption(option);
    }

    render() {
        let chartStyle = {
            width: "100%",
            height: "453px"
        }

        let containerStyle = {
            width: "100%"
        };

        return <div style={containerStyle}>
            <h3>{this.props.title}</h3>
            <div class="custom-echart" ref={this.ref}  style={chartStyle}></div>
        </div>
    }
}