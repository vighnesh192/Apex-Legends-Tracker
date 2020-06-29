import React from 'react';
import { BarLoader } from "react-spinners";

import "./CardDisplay.css";

function CardDisplay(props) {

    return (
        <React.Fragment>
            <div className="col">
                <div className="card">
                    <ul>
                        <li>
                            <div className="card-header">
                                <img className="profile-image" src={props.player1.platformInfo.avatarUrl} alt="Player1 avatar" />
                                <div className="profile-name">
                                    <h2>{props.player1.platformInfo.platformUserIdentifier}</h2>
                                </div>    
                            </div>
                        </li>
                        <li>
                            <small>Level</small>
                            <p>{props.player1.segments[0].stats.level.value}</p>
                        </li>
                        <li>
                            <small>Kills</small>
                            <p>{props.player1.segments[0].stats.kills.value}</p>
                        </li>
                        
                            {typeof props.player1.segments[0].stats.season5Kills !== "undefined" 
                            ? <React.Fragment>
                                <li>
                                    <small>Season 5 Kills</small>
                                    <p>{props.player1.segments[0].stats.season5Kills.value}</p>
                                </li>
                              </React.Fragment> 
                            : null}
                        

                        
                            {typeof props.player1.segments[0].stats.season5Wins !== "undefined" 
                            ? <React.Fragment>
                                <li>
                                    <small>Season 5 Wins</small>
                                    <p>{props.player1.segments[0].stats.season5Wins.value}</p>
                                </li>
                              </React.Fragment> 
                            : null}
                        

                        <li>
                            <img src={props.player1.segments[1].metadata.imageUrl} />
                        </li>
                    </ul>    
                </div>
            </div>

            <div className="col">
                <div className="card">
                    <ul>
                        <li>
                            <div className="card-header">
                                <img className="profile-image" src={props.player2.platformInfo.avatarUrl} alt="Player2 avatar" />
                                <div className="profile-name">
                                    <h2>{props.player2.platformInfo.platformUserIdentifier}</h2>
                                </div>    
                            </div>
                        </li>
                        <li>
                            <small>Level</small>
                            <p>{props.player2.segments[0].stats.level.value}</p>
                        </li>
                        <li>
                            <small>Kills</small>
                            <p>{props.player2.segments[0].stats.kills.value}</p>
                        </li>
                        
                            {typeof props.player2.segments[0].stats.season5Kills !== "undefined" 
                            ? <React.Fragment>
                                <li>
                                    <small>Season 5 Kills</small>
                                    <p>{props.player2.segments[0].stats.season5Kills.value}</p>
                                </li>
                              </React.Fragment> 
                            : null}
                        
                        
                            {typeof props.player2.segments[0].stats.season5Wins !== "undefined" 
                            ? <React.Fragment>
                                <li>
                                    <small>Season 5 Wins</small>
                                    <p>{props.player2.segments[0].stats.season5Wins.value}</p>
                                </li>
                              </React.Fragment> 
                            : null}

                            <li>
                                <img src={props.player2.segments[1].metadata.imageUrl} />
                            </li>
                    </ul>
                </div>        
            </div>
        </React.Fragment>
    )
}

export default CardDisplay;