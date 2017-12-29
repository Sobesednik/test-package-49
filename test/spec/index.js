const assert = require('assert')
const context = require('../context/')
const testPackage_49 = require('../../src/')

const testPackage_49TestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testPackage_49, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackage_49()
        })
    },
}

module.exports = testPackage_49TestSuite
