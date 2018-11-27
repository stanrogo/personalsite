import Vue from 'vue';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';

import 'highlight.js/styles/darcula.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);

Vue.prototype.hljs = hljs;
