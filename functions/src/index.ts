import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';


admin.initializeApp();



// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

const API_KEY = "Blk1StmZf6U1b99bOhij8rmRE2jGPDEvwaIrZnlwkP8";
const TEMPLATE_ID = "d-c4ebc2bfb1174e9da66c4ff6a1bb58ee";
sgMail.setApiKey(API_KEY);



 
export const genericEmail = functions.https.onCall(async (data, context) => {

    if (!context.auth ) {
        throw new functions.https.HttpsError('failed-precondition', 'Must be logged with an email address');
    }

    const msg = {
        to:'raskovic.sergio7@gmail.com',
        from: 'hello@fireship.io',
        templateId: TEMPLATE_ID,
        dynamic_template_data: {
            subject: data.subject,
            name: data.text,
        },
    };

    await sgMail.send(msg);

    // Handle errors here

    // Response must be JSON serializable
    return { success: true };

});