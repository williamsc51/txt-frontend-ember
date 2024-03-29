'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'txt-frontend-ember',
    environment,
    rootURL: '',
    locationType: 'hash',

    fontawesome:{
      icons:{
        'free-solid-svg-icons': 'all'
      }
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    
    torii: {
      disableRedirectInitializer: true,
      providers: {
        txtrails: {
          remoteServiceName: 'iframe',
          apiKey: 'QZkeR03mtgEdolCfl87ywf2cYgm-gmrcugprkr8aKco',
          redirectUri: 'http://localhost:4200/'
        }
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    host: 'http://localhost:3000'
    // host: 'http://10.0.0.186:3000'
    // host: 'http://10.0.2.2:3000' // needed for live reload on android emulator. corber start
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.stripe = {
      key: "pk_test_T3VG1Gdp8GTUav96y5yp6mk8"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.host = 'https://txttide.herokuapp.com'
  }

  return ENV;
};
