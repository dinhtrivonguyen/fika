import axios from 'axios';

export default function MessagesHandler(user) {

    this.getMessages = async () => {
        let message = await axios.get(process.env.REACT_APP_BACKEND + '/api/getmessages/' + user);
        this.messages = message.data;
    }

    this.sendMessage = async message => {
        await axios.post(process.env.REACT_APP_BACKEND + '/api/sendmessage/' + user, {message: message});
    }

    this.createUser = async () => {
        await axios.get(process.env.REACT_APP_BACKEND + '/api/createuser/' + user);
    }
    
    this.createUser(user);
}