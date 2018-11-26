const createClient = require('contentful').createClient;
const config = {
    space: 'rb7ghqpklwc4',
    accessToken: '232b1ef6d09ece11d2fb8baeeb17e35cc317bdbf0aae6ef1c433b676af7ae8d4',
};

const client = createClient(config);

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'StanRogo - Thoughts, Events and Other Things by Stanley Clark',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
            {
                hid: 'description',
                name: 'description',
                content: 'Thoughts, events and other things from a computer science student in Eindhoven.'
            }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'manifest', href: '/manifest.json'},
        ]
    },
    /*
    ** Define registered plugins
    */
    plugins: [
        '~/plugins/vue-async-computed',
        '~/plugins/contentful',
        '~/plugins/vue-bootstrap',
        '~/plugins/vue-disqus',
        '~/plugins/vue-markdown',
        '~/plugins/vue-moment',
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        analyze: true,
    },
    generate: {
        async routes() {
            const projects = await client.getEntries({ 'content_type': 'portfolio' });
            const jobs = await client.getEntries({ 'content_type': 'work' });
            const mappedProjects = projects.items.map(x => `/projects/${x.fields.pageName}`);
            const mappedJobs = jobs.items.map(x => `/work/${x.fields.pageName}`);
            return mappedJobs.concat(mappedProjects);
        }
    }
};
