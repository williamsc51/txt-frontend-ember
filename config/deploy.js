/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data':{
      type: 'git-commit'
    },
    'ssh-index': {
      remoteDir: "/usr/local/var/www",
      host: process.env.HOST_IP,
      username: process.env.USER_NAME,
      privateKeyFile: process.env.SSH_KEY_FILE,
      allowOverwrite: true
    },
    rsync: {
      dest: "/usr/local/var/www",
      host: process.env.HOST_IP_RSYNC,
      username: process.env.USER_NAME,
      privateKeyFile: process.env.SSH_KEY_FILE,
      delete: false
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
