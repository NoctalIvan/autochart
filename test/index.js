const assert = require('assert')
const autograph = require('./../src/index')

describe('graph making', () => {
    it('object', () => {
        const graph = autograph.line({
            A: {
                a: 1,
                b: 2
            },
            B: {
                a: 2,
                b: 4
            }
        })
        
        assert.deepEqual(graph, {
            "type": "line",
            "data": {
                "labels": [
                    "A",
                    "B"
                ],
                "datasets": [
                    {
                        "label": "a",
                        "backgroundColor": "rgba(244, 67, 54, 0.4)",
                        "borderColor": "rgb(244, 67, 54)",
                        "lineTension": "0",
                        "data": [
                            1,
                            2
                        ]
                    },
                    {
                        "label": "b",
                        "backgroundColor": "rgba(33, 150, 243, 0.4)",
                        "borderColor": "rgb(33, 150, 243)",
                        "lineTension": "0",
                        "data": [
                            2,
                            4
                        ]
                    }
                ]
            }
          })
    })

    it('array', () => {
        const graph = autograph.line([
            [1,2], 
            [3,4]
        ])
        
        assert.deepEqual(graph, {
            "type": "line",
            "data": {
                "labels": [
                    "0",
                    "1"
                ],
                "datasets": [
                    {
                        "label": "0",
                        "backgroundColor": "rgba(244, 67, 54, 0.4)",
                        "borderColor": "rgb(244, 67, 54)",
                        "lineTension": "0",
                        "data": [
                            1,
                            3
                        ]
                    },
                    {
                        "label": "1",
                        "backgroundColor": "rgba(33, 150, 243, 0.4)",
                        "borderColor": "rgb(33, 150, 243)",
                        "lineTension": "0",
                        "data": [
                            2,
                            4
                        ]
                    }
                ]
            }
        })
    })
})