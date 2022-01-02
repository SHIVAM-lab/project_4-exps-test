const fun = require('./function');

async function getTestType_id(id){
    try{
    var x = await fun.query_exec(`SELECT * FROM ep_test_type where test_type_id = '${id}' and status = '${1}'`);
    console.log(x);
    if (x.length == 0) {
        var bussiness = {
            "status": 0,
            "message": 'no test with this id exists',
            "error":null
        };
          return (bussiness);
    }
    var bussiness = [];
    for (let i = 0; i < x.length; i++) {
        bussiness[i] = x[i];
    }
    console.log(bussiness[0]);
    //return 0;
    //return (bussiness);
    return ({
        'status':1,
        'message':'Test  sent successfully!',
        'data':bussiness,
        'error':null
    })
  }catch(error){
    if(error){
        return ({
            'status':0,
            'message':'Failed to send test !',
            'error':error
        });
    }
}
}

module.exports = {
    getTestType_id
}