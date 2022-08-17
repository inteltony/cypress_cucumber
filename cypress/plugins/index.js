// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default
let myUniqueId,val_a

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),

  on('task', {
        setMyUniqueId: (val) => {
            return (myUniqueId = val);
        },

        getMyUniqueId: () => {
            return myUniqueId;
        },

        setVal: (val) => { return (val_a = val); },

        getVal: () => { return val_a; }
    })
}

