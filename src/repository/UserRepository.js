const User = require('../models/User');

const firebaseapp = require("../../main.js");
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const db = getFirestore(firebaseapp[0]);
const usersCollectionRef = db.collection('users');

function createUser(userId, sex, age, eduLevel, maritalStatus, socialStatus, approval){
    usersCollectionRef.doc(String(userId)).set({
        sex: sex, 
        age: age, 
        eduLevel: eduLevel,
        maritalStatus: maritalStatus,
        socialStatus: socialStatus,
        approval: approval
    });
}

module.exports = {
    createUser
};