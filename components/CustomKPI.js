class CustomKPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };

        this.hypercubeDefinition = {
            "qStateName": "",
            "qDimensions": [],
            "qMeasures": [
            {
                "qLibraryId": "",
                "qDef": {
                "qLabel": this.props.label,
                "qDescription": "",
                "qTags": [],
                "qGrouping": "N",
                "qDef": this.props.measure,
                "qNumFormat": {
                    "qType": "U",
                    "qnDec": 10,
                    "qUseThou": 0,
                    "qFmt": "",
                    "qDec": "",
                    "qThou": ""
                },
                "qRelative": false,
                "qBrutalSum": false,
                "qAggrFunc": "",
                "qAccumulate": 0,
                "qReverseSort": false,
                "qActiveExpression": 0,
                "qExpressions": [],
                "qLabelExpression": "",
                "autoSort": true,
                "cId": "zBCPxQ",
                "numFormatFromTemplate": true,
                "conditionalColoring": {
                    "useConditionalColoring": false,
                    "singleColor": 7,
                    "segments": {
                    "limits": [],
                    "colors": [
                        {
                        "color": 3
                        }
                    ]
                    }
                },
                "measureAxis": {
                    "min": 0,
                    "max": 100
                }
                },
                "qSortBy": {
                "qSortByState": 0,
                "qSortByFrequency": 0,
                "qSortByNumeric": -1,
                "qSortByAscii": 0,
                "qSortByLoadOrder": 1,
                "qSortByExpression": 0,
                "qExpression": {
                    "qv": ""
                },
                "qSortByGreyness": 0
                },
                "qAttributeExpressions": [],
                "qAttributeDimensions": [],
                "qCalcCond": {
                "qv": ""
                },
                "qCalcCondition": {
                "qCond": {
                    "qv": ""
                },
                "qMsg": {
                    "qv": ""
                }
                }
            }
            ],
            "qInterColumnSortOrder": [
            0
            ],
            "qSuppressZero": false,
            "qSuppressMissing": true,
            "qInitialDataFetch": [
            {
                "qLeft": 0,
                "qTop": 0,
                "qWidth": 500,
                "qHeight": 10
            }
            ],
            "qReductionMode": "N",
            "qMode": "S",
            "qPseudoDimPos": -1,
            "qNoOfLeftDims": -1,
            "qAlwaysFullyExpanded": false,
            "qMaxStackedCells": 5000,
            "qPopulateMissing": false,
            "qShowTotalsAbove": false,
            "qIndentMode": false,
            "qCalcCond": {
            "qv": ""
            },
            "qSortbyYValue": 0,
            "qTitle": {
            "qv": ""
            },
            "qCalcCondition": {
            "qCond": {
                "qv": ""
            },
            "qMsg": {
                "qv": ""
            }
            },
            "qColumnOrder": [],
            "customErrorMessage": {
            "calcCond": ""
            },
            "qLayoutExclude": {
            "qHyperCubeDef": {
                "qStateName": "",
                "qDimensions": [],
                "qMeasures": [],
                "qInterColumnSortOrder": [],
                "qSuppressZero": false,
                "qSuppressMissing": false,
                "qInitialDataFetch": [],
                "qReductionMode": "N",
                "qMode": "S",
                "qPseudoDimPos": -1,
                "qNoOfLeftDims": -1,
                "qAlwaysFullyExpanded": false,
                "qMaxStackedCells": 5000,
                "qPopulateMissing": false,
                "qShowTotalsAbove": false,
                "qIndentMode": false,
                "qCalcCond": {
                "qv": ""
                },
                "qSortbyYValue": 0,
                "qTitle": {
                "qv": ""
                },
                "qCalcCondition": {
                "qCond": {
                    "qv": ""
                },
                "qMsg": {
                    "qv": ""
                }
                },
                "qColumnOrder": []
            }
            }
        }
    }

    componentDidMount(){
        this.props.app.createCube(this.hypercubeDefinition, (data) => {
            let value = data.qHyperCube.qDataPages[0].qMatrix[0][0].qText;
            let label = data.qHyperCube.qMeasureInfo[0].qFallbackTitle;
            this.setState({
                data: {
                    value: value,
                    label: label
                }
            })
        });
    }

    render() {
        let styles = {
            kpiContainer: {
                display: "flex",
                flex: "1",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Roboto"
            },
            kpiValue: {
                fontSize: "60px",
                fontWeight: "bold",
                color: this.props.color
            },
            kpiLabel: {
                fontSize: "16px"
            }
        }

        let kpiObject = "";

        if(!this.state.data.value) {
            kpiObject = <ObjectLoader height="100px" width="50px" color="blue"></ObjectLoader>
        } else {
            kpiObject = <div style={styles.kpiContainer}>
                <span style={styles.kpiValue}>{this.state.data.value}</span>
                <span style={styles.kpiLabel}>{this.state.data.label}</span>
            </div>
        }

        return kpiObject;
    }

}