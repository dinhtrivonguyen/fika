import { Component } from "react";
import MessagesHandler from "../classes/MessagesHandler";
import SystemCaller from "../classes/SystemCaller";

export default class SendMessages extends Component {

    messagesHandler = new MessagesHandler(this.props.match.params.user);
    systemCaller = new SystemCaller();

    state = {
        disabled: true
    }

    updateMessage = e => {
        this.message = e.target.value.trim();
        if (this.message !== "") this.setState({disabled: false});
        else this.setState({disabled: true});
    }

    sendMessage = async (e) => {
        await this.messagesHandler.sendMessage(this.message);
        document.getElementById("message").value = "";
        e.target.innerHTML = "sent";
        await this.systemCaller.sleep(1.5);
        e.target.innerHTML = "Send Message";
    }

    render() {
        return (
            <div className="send-messages">
                <div className="center-send">
                    <div className="head">Send a message from Fika to <b>{this.props.match.params.user}</b>.<br/><div>don't worry they won't know it's from you</div></div>
                    <input type="text" id="message" placeholder="your message" onChange={this.updateMessage} autoComplete="false"/><br/>
                    <button className="send" disabled={this.state.disabled} onClick={this.sendMessage}>Send Message</button>
                </div>
            </div>
        );
    }
}