//mock test for file


var fetchRequest = require('../redux/actions/index').fetchRequest;

test('data returned with asynch req', done => {
    function callback(data) {
        expect(data).toBe('result');
        done();
    }
    fetchRequest(callback);
});
