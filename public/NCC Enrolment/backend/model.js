const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true
    },
    middleName: {
        type: String,
        required: [true, "Middle name is required"],
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true
    },
    gender: {
        type: String,
        required: [true, "Gender is required"],
        trim: true,
        enum: ['Male', 'Female', 'Other']
    },
    reg: {
        type: String,
        required: [true, "Registration number is required"],
        trim: true
    },
    dob: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true
    },
    fatherName: {
        type: String,
        required: [true, "Father's name is required"],
        trim: true
    },
    motherName: {
        type: String,
        required: [true, "Mother's name is required"],
        trim: true
    },
    nationality: {
        type: String,
        required: [true, "Nationality is required"],
        trim: true
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        enum: ['General', 'OBC', 'SC', 'ST']
    },
    identificationMark: {
        type: String,
        required: [true, "Identification mark is required"],
        trim: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
    }
});

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;
