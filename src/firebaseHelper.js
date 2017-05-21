/**
 * Helper plugin to add the firebase database references to all components
 *
 * @author Stanley Clark
 * @version 1.0.0
 */

import Firebase from 'firebase';

const db = Firebase.initializeApp({
    databaseURL: 'https://stanrogo-c5c02.firebaseio.com/'
}).database();

const FireBaseHelper = {

    install(Vue) {
        Vue.mixin({
            firebase: {
                stanley: {
                    source: db.ref('stanley'),
                    asObject: true
                },
                skills: db.ref('skills'),
                contact: db.ref('contact')
            }
        });
    }
};

export default FireBaseHelper;