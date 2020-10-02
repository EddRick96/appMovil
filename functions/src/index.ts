import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


admin.initializeApp();
// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    const showDocs = await 
        admin.firestore().collection('vehiculos').limit(30).get();
    // Send back a message that we've succesfully written the message
    res.send(showDocs.docs.map(doc => doc.data()));
});