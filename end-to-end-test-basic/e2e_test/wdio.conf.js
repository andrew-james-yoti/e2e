exports.config = {

    runner: 'local',
    specs: ["./features/*.feature"],
    exclude: [],

    onPrepare: require('expect-webdriverio').setOptions({ wait: 5000 }), 


    maxInstances: 10,

    capabilities: [
        {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
        "--no-sandbox",
        "--disable-dev-shm-usage",
        "--headless",
      ],
            },
            acceptInsecureCerts: true
        }
    ],

    logLevel: 'silent',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',

    reporters: ['spec'],

    cucumberOpts: {
        require: ['./stepDefinitions/./*.stepdefs.js', './support/hooks.js'],
        backtrace: false,
        requireModule: ['@babel/register'],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: false,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        ignoreUndefinedDefinitions: true,
        timeout: 60000,
    },
}
