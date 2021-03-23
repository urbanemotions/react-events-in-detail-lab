import React from 'react';

class CoordinatesButtons extends React.Component {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick = {this.handleClick}>Coordinates</button>
        )
    }

}
export default CoordinatesButtons;