import React from "react";
import { v4 as uuidv4 } from 'uuid';

class TimeboxCreator extends React.Component {
    constructor(props) {
        super(props);
        this.titleInput = React.createRef();
        this.totalTimeInMinutesInput = React.createRef();
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate({ 
            id: uuidv4(), 
            title: this.titleInput.current.value,  
            totalTimeInMinutes: this.totalTimeInMinutesInput.current.value
        });
        this.titleInput.current.value = "";
        this.totalTimeInMinutesInput.current.value = "";
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="TimeboxCreator">
                <label>
                    Co robisz? 
                    <input 
                        ref={this.titleInput} 
                        onChange={this.handleTitleChange}
                        type="text" 
                    />
                </label><br />
                <label>
                    Ile minut? 
                    <input 
                        ref={this.totalTimeInMinutesInput}
                        onChange={this.handleTotalTimeInMinutesChange}
                        type="number" 
                    />
                </label><br />
                <button 
                >dodaj timebox</button>
            </form>
            )
        }    
    }

export default TimeboxCreator