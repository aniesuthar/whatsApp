
import conversation from "../modal/conversation.js";

export const newConversation = async ( request, response) => {
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await conversation.findOne({ members: { $all: [receiverId, senderId] }});

        if (exist){
            response.status(200).json('conversation already exists');
            return;
        }

        const newConversation = new conversation({
            members: []
        });
        await newConversation.save();
        return response.status(200).json('conversation saved successfully');
    }catch (error){
        return response.status(500).json(error.message);
    }
     
}