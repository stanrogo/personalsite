/**
 * Helper plugin to add the firebase database references to all components
 *
 * @author Stanley Clark
 * @version 1.0.0
 */

import Firebase from 'firebase';

const firebaseInited = Firebase.initializeApp({
    databaseURL: 'https://stanrogo-c5c02.firebaseio.com/'
});

const db = firebaseInited.database();
const storage = firebaseInited.storage();

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
            },
            methods: {
                downloadDocument: function(documentName){

                    storage.refFromURL(`gs://stanrogo-c5c02.appspot.com/${documentName}`).getDownloadURL().then(url => {

                        const xhr = new XMLHttpRequest();
                        xhr.responseType = 'blob';
                        xhr.onload = function() {

                            if(this.status === 200){

                                // Create a new Blob object using the response data of the onload object

                                const blob = new Blob([this.response], {type: 'application/pdf'});

                                //Create a link element, hide it, direct it towards the blob, then 'click' it

                                let a = document.createElement("a");
                                a.style = "display: none";
                                document.body.appendChild(a);

                                // Create a DOMString representing the blob and point the link element towards it

                                let urlObjet = window.URL.createObjectURL(blob);
                                a.href = urlObjet;
                                a.download = documentName;

                                // Pragramatically click the link to trigger the download

                                a.click();

                                // Release the reference to the file by revoking the Object URL

                                window.URL.revokeObjectURL(urlObjet);
                            }
                        };
                        xhr.open('GET', url);
                        xhr.send();

                    }).catch(function(error) {


                    });
                }
            }
        });
    }
};

export default FireBaseHelper;