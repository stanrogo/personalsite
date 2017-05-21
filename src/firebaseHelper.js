/**
 * Created by Stanley on 21/05/2017.
 *
 * Helper plugin to add the firebase database references to all components
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
                skills: db.ref('skills')
            }
        });
    }
};

export default FireBaseHelper;