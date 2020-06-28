import React from 'react';
import "./GraphDisplay.css"
import { Bar, Line } from 'react-chartjs-2';

function GraphDisplay(props) {

    const state1 = {
        labels: ['Level', 'Kills', 'Season 5 Kills', 'Season 5 Wins'],
        datasets: [
          {
            label: props.player1.platformInfo.platformUserIdentifier,
            data: [props.player1.segments[0].stats.level.value,
                props.player1.segments[0].stats.kills.value,
                typeof props.player1.segments[0].stats.season5Kills !== "undefined" ? props.player1.segments[0].stats.season5Kills.value : 0,
                typeof props.player1.segments[0].stats.season5Wins !== "undefined" ? props.player1.segments[0].stats.season5Wins.value : 0
            ],
            backgroundColor: '#a5d3ec',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
          },
          {
            label: props.player2.platformInfo.platformUserIdentifier,
            data: [props.player2.segments[0].stats.level.value,
                props.player2.segments[0].stats.kills.value,
                typeof props.player2.segments[0].stats.season5Kills !== "undefined" ? props.player2.segments[0].stats.season5Kills.value : 0,
                typeof props.player2.segments[0].stats.season5Wins !== "undefined" ? props.player2.segments[0].stats.season5Wins.value : 0
            ],
            backgroundColor: '#BBED9A',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 0.5,
          }
        ]
      }

    return (
        <React.Fragment>
            <div id="graph">
                <Line 
                data={state1}
                options={{
                  title:{
                    display:true,
                    text:'Apex Stats',
                    fontSize:35,
                    fontColor: "#e2f1f8"
                  },
                  legend:{
                    display:true,
                    position:'right',
                    labels: {
                      fontColor: "#e2f1f8"
                    }
                  },
                  scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            fontColor: 'e2f1f8'
                        },
                    }],
                  xAxes: [{
                        ticks: {
                            fontColor: 'e2f1f8'
                        },
                    }]
                }   
                }}/>
            </div>
        </React.Fragment>
    )
}

export default GraphDisplay;