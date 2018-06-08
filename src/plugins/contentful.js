import { createClient } from 'contentful';

const config = {
  space: 'rb7ghqpklwc4',
  accessToken: '232b1ef6d09ece11d2fb8baeeb17e35cc317bdbf0aae6ef1c433b676af7ae8d4',
};

const client = createClient(config);

const Contentful = {};

Contentful.install = function (Vue, options) {
    Vue.prototype.$contentful = client;
};

export default Contentful;
