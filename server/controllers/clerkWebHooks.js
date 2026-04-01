import User from "../models/User.js";
import { Webhook } from "svix";
export const clerkWebhooks = async (req, res) => {
    try {
        // create svix webhook instance with the clerk secret from environment variables
       const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
   
       //  getting headers
       const headers = {
        'svix-id': req.headers['svix-id']
         , 'svix-timestamp': req.headers['svix-timestamp']
            , 'svix-signature': req.headers['svix-signature']
      };

    //   verifying headers
    await whook.verify(JSON.stringify(req.body), headers);

    //getting data from request body 
    const {data,type} = req.body;

    const userData={
        _id: data.id,
        email: data.email_addresses[0].email_address,
        username: data.firstname + " " + data.lastname,
        image: data.image_url,
    }

    // switch cases for different cases
switch (type) {
    case "user.created":{
        await User.create(userData);
        console.log("New user created:", userData);
        break;
    }
       
     case "user.updated":{
        await User.findByIdAndUpdate(data.id, userData);
        console.log("User updated:", userData  );
        break;
    }

     case "user.deleted":{
        await User.findByIdAndDelete(data.id);
        console.log("User deleted:", data.id);
        break;
    }

    default:
        break;
}
res.json({success:true ,  message: "Webhook received" });


    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message }); 

    }
}
export default clerkWebhooks;
