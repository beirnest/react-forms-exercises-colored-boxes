import React from "react";

function Box ({id, color, width=300, height=200, handleDelete}){
    const remove = () => handleDelete(id);
    return(
        <div>
            <div 
                className={"colored-box-"}
                style={{ backgroundColor: color, width: parseInt(width), height: parseInt(height) }}
            >           
            </div>
            <button 
            className={"button"}
            onClick={remove}
            >
                Remove Box
            </button>
        </div>
    )
};

export default Box;