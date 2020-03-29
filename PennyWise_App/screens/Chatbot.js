import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

class Chatbot extends React.Component {
  state = {
    messages: [],
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Welcome to Finance Now, How May I assist you today',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    console.log("Hey" in (messages[0]["text"]).split(' '));
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))

    if ((messages[0]["text"]).split(' ').includes("Hey")){
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, {"_id": (Math.random()*100), "createdAt": new Date(), "text": "Hi there, Great Saving Pattern", "user": {"_id": 2}}),
            }))
    }

    else if ((messages[0]["text"]).split(' ').includes("buy")){
        let txt = messages[0]["text"];
        var numb = txt.match(/\d/g);
        numb = numb.join("");
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, {"_id": (Math.random()*100), "createdAt": new Date(), "text": `Recommending you a new Saving pattern for saving ${numb}`, "user": {"_id": 2}}),
            messages: GiftedChat.append(previousState.messages, {"_id": (Math.random()*100), "createdAt": new Date(), "text": `May I please know the time period for saving ${numb} ?`, "user": {"_id": 2}}),

        }))
    }

    else if ((messages[0]["text"]).split(' ').includes("weeks")){
        let txt = messages[0]["text"];
        var numb = txt.match(/\d/g);
        numb = numb.join("");
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, {"_id": (Math.random()*100), "createdAt": new Date(), "text": `You can save within ${numb - 2} weeks, would you like to start ?`, "user": {"_id": 2}}),
            }))
    }

    else if ((messages[0]["text"]).split(' ').includes("yes")){

        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, {"_id": (Math.random()*100), "createdAt": new Date(), "text": `Happy Saving, Your Saving Pattern has been modified`, "user": {"_id": 2}}),
            }))
    }

  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}


export default Chatbot;