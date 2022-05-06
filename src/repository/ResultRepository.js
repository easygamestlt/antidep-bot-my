const Result = require('../models/Result');
const { formatDate } = require('../external');

function createResult(userId) {
    var result = new Result({
            vk_id: userId,
            results: {
                depression: {
                    date: null,
                    score: null,
                    sane: null
                },
                anxiety1: {
                    date: null,
                    score: null,
                    sane: null
                },
                anxiety2: {
                    date: null,
                    score: null,
                    sane: null
                },
                stress: {
                    date: null,
                    score: null,
                    sane: null
                },
                motivation: {
                    date: null,
                    score: null,
                    sane: null
                },
                burnout: {
                    date: null,
                    exhaustion: null,
                    reduction: null,
                    depersonalization: null,
                    total: null
                },
                inclination: {
                    date: null,
                    score: null
                },
                aggression: {
                    date: null,
                    score: null,
                    sane: null
                },
                lifestyle: {
                    date: null,
                    score: null,
                    sane: null
                },
                temper: {
                    date: null,
                    score: null,
                    kind: null
                },
                eysenck: {
                    date: null,
                    kind: null,
                    neuroticism: null,
                    lie: null
                }
            }
    });
    Result.exists({vk_id: userId}, function (err, data) {
        if (err) { console.log(err); }
        else {
            if (data == false) {
                result.save(function (err) {
                    if (err) { console.log(err); }
                    else console.log('result object was created');
                });
            }
            else console.log('result object has already been created');
        }
    });
};
const firebaseapp = require("../../main.js");
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const db = getFirestore(firebaseapp[0]);
const resultCollectionRef = db.collection('result');

function updateResult(user_id, testType, score, sanity){
    resultCollectionRef.doc(String(user_id)).collection('first_kit_test').doc(String(testType)).set({
        date: formatDate(),
        score: score,
        sane: sanity
    });
};

function updateBurnout(user_id, exhaustion, reduction, deperson, total){
    resultCollectionRef.doc(String(user_id)).collection('burnout').doc('result').set({
        date: formatDate(), 
        exhaustion: exhaustion,
        reduction: reduction,
        depersonalization: deperson,
        total: total
    });
};

function updateTemper(user_id, testType, kind, score){
    resultCollectionRef.doc(String(user_id)).collection('second_kit_test').doc(String(testType)).set({
        date: formatDate(),
        score: score,
        kind: kind
    });
};

function updateEysenck(user_id, kind, neuroticism, lie){
    resultCollectionRef.doc(String(user_id)).collection('eysenck').doc('result').set({
        date: formatDate(), 
        kind: kind,
        neuroticism: neuroticism,
        lie: lie
    }); 
};

module.exports = {
    createResult, updateResult, updateBurnout, updateTemper, updateEysenck
}