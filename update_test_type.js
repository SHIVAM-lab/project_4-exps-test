const fun = require('./function');

async function updateTestType(option){
    try {
        var id = option.Id;
        var x = await fun.query_exec(`SELECT * FROM ep_test_type where test_type_id = '${id}'`);
        console.log(x);
        if (x.length == 0) {
            var bussiness = {
                "status": 0,
                "message": 'no test with this id exists'
            };
           return (bussiness);
        }
        var name, code, poly_id, pro_id, status;
        if (typeof option.name == undefined || option.name==null) {
            name = x[0].test_type_name;
        } else {
            name = option.name;
        }
        if (typeof option.code == undefined || option.code==null) {
            code = x[0].test_type_code;
        } else {
            code = option.code;
        }
        if (typeof option.poly_id == undefined || option.poly_id==null) {
            poly_id = x[0].polymer_type_id;
        } else {
            poly_id = option.poly_id
        }
        if (typeof option.prodt_id == undefined || option.prodt_id==null) {
            pro_id = x[0].product_type_id;
        } else {
            pro_id = option.prodt_id;
        }
        if (typeof option.status == undefined || option.status==null) {
            status = x[0].status;
        } else {
            status = option.status;
        }

        var data = {
            'test_type_name': name,
            'test_type_code': code,
            'polymer_type_id': poly_id,
            'product_type_id': pro_id,
            'status': status
        };
        console.log(data);
        // return 0;
        var update = await fun.query_update(`test_type_id = ${id}`, data, 'ep_test_type');
        console.log(update);
        //return 0;
       return ({
            'status': 1,
            'message': 'test type updated successfully!',
            'error': ''
        });
    } catch (error) {
        if (error) {
            console.log(error);
           return ({
                'status': 0,
                'message': 'failed to update test type!',
                'error': error
            });
        }
    }

}

module.exports = {
    updateTestType
}