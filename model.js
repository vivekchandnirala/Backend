const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        //: [true, "First name is //"],
        trim: true
    },
    middleName: {
        type: String,
        //: [true, "Middle name is //"],
        trim: true
    },
    lastName: {
        type: String,
        //: [true, "Last name is //"],
        trim: true
    },
    gender: {
        type: String,
        //: [true],
        trim: true,
    },
    reg: {
        type: String,
        //: [true, "Registration number is //"],
        trim: true
    },
    dob: {
        type: Date,
        //: [true, "Date of birth is //"]
    },
    mobile: {
        type: String,
        //: [true, "Mobile number is //"],
        trim: true
    },
    email: {
        type: String,
        //: [true, "Email is //"],
        trim: true
    },
    fatherName: {
        type: String,
        //: [true, "Father's name is //"],
        trim: true
    },
    motherName: {
        type: String,
        //: [true, "Mother's name is //"],
        trim: true
    },
    nationality: {
        type: String,
        //: [true, "Nationality is //"],
        trim: true
    },
    category: {
        type: String,
        //: [true, "Category is //"],
    },
    identificationMark: {
        type: String,
        //: [true, "Identification mark is //"],
        trim: true
    },
    bloodGroup: {
        type: String,
    }
});

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;
