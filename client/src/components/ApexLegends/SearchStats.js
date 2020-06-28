import React, { useState } from 'react';
import './SearchStats.css';
import { Redirect } from 'react-router';


function SearchStats() {

    const [ playerDetails, setPlayerDetails ] = useState({platform1: '', 
                                                        platformUserIdentifier1: '',
                                                        platform2: '', 
                                                        platformUserIdentifier2: ''
                                                    });

    const [ submitted, setSubmitted ] = useState(false);
    const [formIncomplete, setFormIncomplete] = useState(false);
    const [ p1SelectedValue, setP1SelectedValue ] = useState('');
    const [ p2SelectedValue, setP2SelectedValue ] = useState('');

    const handleChange = e => {
        setPlayerDetails({
            ...playerDetails,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(playerDetails.platform1 == '' || playerDetails.platformUserIdentifier1 == '') {
            setFormIncomplete(true);
        } else {
            setFormIncomplete(false);
            setSubmitted(true);
        }
        
    }

    const handleClick = e => {
        e.preventDefault();
        setPlayerDetails({
            ...playerDetails,
            [e.currentTarget.name] : e.currentTarget.value
        });
        if([e.currentTarget.name] == "platform1") {
            setP1SelectedValue(`p1${[e.currentTarget.value]}`);
        } else if([e.currentTarget.name] == "platform2"){
            setP2SelectedValue(`p2${[e.currentTarget.value]}`);
        }
    }


    return (
        <div id="container">
            <div id="main-content">
                <div id="hero-container">
                    <h1><span>Apex Legends</span> stats tracker.</h1>
                    <p>Track and compare stats with your friends.</p>
                </div>

                <div id="form-container">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="player-details" id="p1-details">
                            <div className="form-label">
                                Player 1:
                            </div>

                            <div className="btn-bar">
                                <div className="buttons">
                                    <button className="btn" style={p1SelectedValue=="p1psn" ? {backgroundColor: "black"} : {backgroundColor: "white"}} onClick={handleClick} name="platform1" value="psn"><i className="fab fa-playstation"></i></button>
                                    <button className="btn" style={p1SelectedValue=="p1xbl" ? {backgroundColor: "black"} : {backgroundColor: "white"}} onClick={handleClick} name="platform1" value="xbl"><i className="fab fa-xbox"></i></button>
                                    <button className="btn" style={p1SelectedValue=="p1origin" ? {backgroundColor: "black"} : {backgroundColor: "white"}} onClick={handleClick} name="platform1" value="origin"><i className="fab fa-windows"></i></button>
                                </div>
                                
                                <div className="search-bar">
                                    <input 
                                        className="text-input" 
                                        type="text" 
                                        placeholder="Apex UserId"
                                        value={ playerDetails.platformUserIdentifier1 }
                                        name="platformUserIdentifier1"
                                        onChange={ handleChange }    
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="player-details" id="p2-details">
                            <div className="form-label">
                                Player 2:
                            </div>

                            <div className="btn-bar">
                                <div className="buttons">
                                    <button className="btn" style={p2SelectedValue=="p2psn" ? {backgroundColor: "black"} : {backgroundColor: "white"}} onClick={handleClick} name="platform2" value="psn"><i className="fab fa-playstation"></i></button>
                                    <button className="btn" style={p2SelectedValue=="p2xbl" ? {backgroundColor: "black"} : {backgroundColor: "white"}} onClick={handleClick} name="platform2" value="xbl"><i className="fab fa-xbox"></i></button>
                                    <button className="btn" style={p2SelectedValue=="p2origin" ? {backgroundColor: "black"} : {backgroundColor: "white"}} onClick={handleClick} name="platform2" value="origin"><i className="fab fa-windows"></i></button>
                                </div>
                                
                                <div className="search-bar">
                                    <input 
                                        className="text-input" 
                                        type="text" 
                                        placeholder="Apex UserId"                                     
                                        value={ playerDetails.platformUserIdentifier2 }
                                        name="platformUserIdentifier2"
                                        onChange={ handleChange }
                                    />
                                </div>
                            </div>
                        </div>

                        <div id="submit">
                            <button type="submit">Submit</button>
                        </div>

                        {formIncomplete && <p id="incomplete-form">Please select platform and enter the Apex UserId</p>}
                    </form>
                </div>

                {/* REDIRECT ON FORM  SUBMITTED*/}  
                {submitted && <Redirect to={{
                        pathname: "/compare",
                        state: {...playerDetails}
                    }} />
                }
            </div>
            <div id="img-overlay"></div>
        </div>
    )
}

export default SearchStats;