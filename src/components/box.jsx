import React from 'react';

const BACKGROUND = 0;
const PLAYER = 1;
const BALL = 2;
export {
    BACKGROUND,
    PLAYER,
    BALL,
}

const backgroundStyle = {
    height: "42px",
    width: "35px",
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor : "black",
}

const playerStyle = {
    height: "40px",
    width: "10px",
    borderStyle: "solid",
    justifyContent: "center",
    backgroundColor : "white",
    color: "white"
}

const ballStyle = {
    height: "35px",
    width: "35px",
    display: "block",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: "100%",
    color:"white",
    zIndex: "10",
    position: 'relative'
}

const getStyle = (val) => {
    if (val === BACKGROUND) {
        return {};
    } if (val === PLAYER) {
        return playerStyle;
    } else {
        return ballStyle;
    }
}

const Box = (props) => <div style={backgroundStyle}> 
                        <div style={getStyle(props.name)} /> 
                    </div>

export default Box;