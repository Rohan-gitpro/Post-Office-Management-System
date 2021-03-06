const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    Line1: {
        type : String,
        required : true
    },
    Line2: {
        type : String,
    },
    City: {
        type : String,
        required : true
    },
    State: {
        type : String,
        required : true
    },
    PinCode: {
        type : String,
        required : true
    }
});

const DetailSchema = new Schema({
    name : {
        type : String ,
        required : true
    },
    Address : {
        type : AddressSchema ,
        required : true
    },
    email : {
        type : String
    },
    MobNumber : {
        type : String,
        required: true
    }
})

const ParcelOutgoingSchema = new Schema({
    user : {
        type : String,
        required: true
    },
    SenderDetails : {
        type : DetailSchema,
        required : true
    },
    RecieverDetails : {
        type : DetailSchema,
        required : true
    },
    PackageDescription : {
        type : String
    },
    PackageWeight : {
        type : Number
    },
    Price : {
        type : Number
    },
    Picked : {
        type : String,
        enum : ["Picked" , "Not Picked"]
    },
    ExtraComments : {
        type : String
    },
    DispatchStatus : {
        type : String,
        enum : ["Dispatched" , "Not Dispatched"]
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = ParcelOutgoing = mongoose.model('ParcelOut' , ParcelOutgoingSchema);