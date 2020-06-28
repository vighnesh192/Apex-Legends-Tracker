import React, { useState, useEffect } from 'react';
import { BarLoader } from "react-spinners";

import CardDisplay from './CardDisplay';
import GraphDisplay from './GraphDisplay';
import "./CompareStats.css";

function CompareStats(props) {

    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState({});
    const [ player1, setPlayer1 ] = useState({ 
        platformInfo: { avatarUrl: "", platformUserIdentifier: "" },
        segments: [
            {
                stats: {
                    level: { value: null },
                    kills: { value: null },
                    season5Wins: { value: null },
                    season5Kills: { value: null },
                }
            },
            {
                metadata: {
                    imageUrl: "",
                    tallImageUrl: "",
                    bgImageUrl: ""
                }
            }
        ]
     });

     const [ player2, setPlayer2 ] = useState({ 
        platformInfo: { avatarUrl: "", platformUserIdentifier: "" },
        segments: [
            {
                stats: {
                    level: { value: null },
                    kills: { value: null },
                    season5Wins: { value: null },
                    season5Kills: { value: null },
                }
            },
        
            {
                metadata: {
                    imageUrl: "",
                    tallImageUrl: "",
                    bgImageUrl: ""
                }
            }
        ]
     });

    const { platform1, platform2, platformUserIdentifier1, platformUserIdentifier2 } = props.location.state;

    useEffect(function effectFunction() {
        async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(`/api/v1/compare/${platform1}/${platformUserIdentifier1}`); 
            const data1 = await res.json();
            setPlayer1(data1.data);
            setLoading(false);
            
        } catch(err) {
            setLoading(false);
            setError(err);
            console.log(err);
        };   
    }
    fetchData();
    }, []);

    useEffect(function effectFunction() {
        async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(`/api/v1/compare/${platform2}/${platformUserIdentifier2}`); 
            const data2 = await res.json();
            setPlayer2(data2.data);
            await console.log(data2);
            setLoading(false); 
        } catch(err) {
            setLoading(false);
            console.log(err);
        }    
    }
    fetchData();
    }, []);   

    return (
        <div id="compare-stats-container">
            { 
                loading 
                ? <div id="loader"> 
                    <BarLoader color='white' loading={loading} /> 
                  </div>
                : <React.Fragment>
                    <CardDisplay player1={player1} player2={player2} loading={loading} />               
                    <GraphDisplay player1={player1} player2={player2} />  
                  </React.Fragment>  
            }
        </div>
    )
}

export default CompareStats;