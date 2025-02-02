import React from 'react';

class DelayedButton extends React.Component {

    handleClick = (event) => {
        event.persist();
        window.setTimeout(() => {
        this.props.onDelayedClick(event);
        }, this.props.delay);
    }
    render() {
        return (
            <button onClick = {this.props.onDelayedClick}>Delayed</button>

        )
    }

}

export default DelayedButton;