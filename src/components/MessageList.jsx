import { Component } from "react";
import MessagesHandler from "../classes/MessagesHandler";
import Message from './Message';

export default class MessageList extends Component {

    messagesHandler = new MessagesHandler(this.props.match.params.user);

    state = {}

    componentDidMount() {
        this.initMessages(this.props.match.params.user);
    }

    async initMessages(user) {
        await this.messagesHandler.getMessages()
        const link = process.env.REACT_APP_WEBSITE + "/sendto/" + user;
        this.setState({user, messages: this.messagesHandler.messages, link});
    }

    copyLink(e) {
        document.getElementById("link").select();
        document.execCommand("copy");
        e.target.innerHTML = "Copied...";
    }

    render() {
        return (
            <div>
                {this.state.user && <div>
                    <input id="link" type="text" value={`Write a secret anonymus message for "${this.state.user}" at ${this.state.link}`.replaceAll("_", " ") } readOnly/><br/>
                    <button onClick={this.copyLink} >Copy</button><br/>
                    <u><h1>Your Messages</h1></u>
                    </div>}
                {this.state.messages && this.state.messages.length > 0 ? this.state.messages.map((value, index) => {
                    return <Message key={index} message={value}></Message>;
                }) : <div>There are no messages here. Please try to reload Fika page.</div>}
            </div>
        );
    }
}