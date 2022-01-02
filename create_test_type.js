const fun = require('./function');

async function createTestType(x) {
    try {
        var data = {
            'test_type_name': x.name,
            'test_type_code': x.code,
            'polymer_type_id': x.Id,
            'product_type_id': x.prodt_id,
            'status': x.status
        };
        var column = [];
        var values = [];
        for (var key in data) {

            column.push(key);
            values.push(data[key]);
        }
        var x = await fun.query_insert(column, values, 'ep_test_type');
        console.log(x);
        return ({
            'status': 1,
            'message': 'test type successfully updated',
            'error': " "
        });
    } catch (error) {
        if (error) {
            console.log(error);
            return ({
                'status': 0,
                'message': 'Failed to update test type',
                'error': error
            });
        }
    }
}

module.exports = {
    createTestType
}