const Feedback = require('../models/Feedback');
const { formatDate } = require('../external');

const firebaseapp = require("../../main.js");
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const db = getFirestore(firebaseapp[0]);
const feedbackCollectionRef = db.collection('feedback');

function addFeedback(user_id, text) {
    feedbackCollectionRef.doc(String(user_id)).set({
        vk_id: user_id,
        text: text,
        data: formatDate()
    });

};

module.exports = {
    addFeedback
};