// import mongoose from "mongoose";
// const roomSchema = new mongoose.Schema({
//     hotel: {
//         type: String,
//         ref: "Hotel",
//         required: true,
//     },
//     roomType: {
//         type: String,
//         required: true,
//     },
//     pricePerNight: {
//         type: Number,
//         required: true,
//     },
//     amenities: {
//         type: Array,
//         required: true,
//     },
//     images: [{
//         type: String,
//     }],
//       isAvailable: {
//         type: Boolean,
//         default: true,
//     },
// }, { timestamps: true });


// const Room = mongoose.model("Room", roomSchema);
// export default Room;



import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    // FIXED: Changed to ObjectId
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true,
    },
    roomType: {
        type: String,
        required: true,
    },
    pricePerNight: {
        type: Number,
        required: true,
    },
    amenities: {
        type: [String], // FIXED: Better to specify array of strings
        required: true,
    },
    images: [{
        type: String,
    }],
    isAvailable: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Room = mongoose.model("Room", roomSchema);
export default Room;