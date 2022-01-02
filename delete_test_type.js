const fun = require('./function');

async function deleteTestType(option) {
    try {
        var id = option.Id;
        var y = await fun.query_exec(`select * from ep_test_type where test_type_id = '${id}' and status = '${1}'`);
        if (y.length == 0) {
            return ({
                'status': 0,
                'message': `no test exists with ${id} id exists`,
                'error': `invalid test id`
            });
        }
        // var x = await fun.query_exec(`delete from ep_test_type where test_type_id = ${id}`);
        // console.log(x);
        var data = {
            'status': 0
        };
        console.log(data);
        // return 0;
        var update = await fun.query_update(`test_type_id = ${id}`, data, 'ep_test_type');
        console.log(update);
        return ({
            'status': 1,
            'message': `Test type deleted successfully!`,
            'error': ''
        });
    } catch (error) {
        if (error) {
            console.log(error);
            return ({
                'status': 0,
                'message': `Some error occured!`,
                'error': `${error}`
            });
        }
    }

}

module.exports = {
    deleteTestType
}