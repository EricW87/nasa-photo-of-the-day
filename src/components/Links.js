import React from "react";

const Links = props => {

    return (
        <div className="links">
            <button className="previous" onClick={() => props.dateHandler(-1)}>{"<"}</button>
            <button className="next" onClick={() => props.dateHandler(1)}>{">"}</button>
        </div>
    );
}

export default Links;