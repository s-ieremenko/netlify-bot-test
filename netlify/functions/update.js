const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
    console.log(event.body)
    const { message} = JSON.parse(event.body);
    console.log('id', message.chat.id)
    await sendMessage(message.chat.id, "I got your message!");
    return { statusCode: 200 };
};

