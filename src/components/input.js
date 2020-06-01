import React from "react";

function Input(props) {

    return (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            className="new-task"
            value={props.value}
            onChange={props.handleTaskChange} 
            required/>
        </form>
    );
    
}

export default Input