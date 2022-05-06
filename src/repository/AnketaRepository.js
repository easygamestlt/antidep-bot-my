const Anketa = require('../models/Anketa');

const firebaseapp = require("../../main.js");
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const db = getFirestore(firebaseapp[0]);
const anketaCollectionRef = db.collection('anketa');

function createAnketa(user_Id, fullname, phone, mail, workandstudies, region, position, status) {
    anketaCollectionRef.doc(String(user_Id)).set({
        fullname: fullname,
        phone: phone,
        mail: mail,
        workandstudies: workandstudies,
        region: region,
        position: position,
        status: status 
    });
}

module.exports = {
    createAnketa
};