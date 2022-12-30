import { Component } from "react";

export default class Login extends Component {

    state = {
        disabled: true
    }
    updateUsername = e => {
        this.username = e.target.value.trim().replaceAll(" ", "_");
        if (this.username !== "") this.setState({disabled: false});
        else this.setState({disabled: true});
    }

    startApp = () => {
        this.props.history.push(`/messages/${this.username}`);
    }

    render() {
        return (
            <div className="login">
                <div>
                    <input type="text" onChange={this.updateUsername} placeholder="Your username" /><br/>
                    <button onClick={this.startApp} disabled={this.state.disabled}>Create Username</button>
                    <div className="small">*all usernames are temporary and last 24 hours</div>
                </div>
            </div>
        );
    }
}