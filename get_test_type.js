const fun = require('./function');

async function getTestType(){
    try{
    var x = await fun.query_exec(`SELECT * FROM ep_test_type where status = '${1}'`);
    console.log(x);
    var bussiness = [];
    for (let i = 0; i < x.length; i++) {
        bussiness[i] = x[i];
    }
    console.log(bussiness[0]);
    //return 0;
    //return (bussiness)
    return ({
        'status':1,
        'message':'Test list sent successfully!',
        'data':bussiness,
        'error':null
    })
 }catch(error){
     if(error){
         return ({
             'status':0,
             'message':'Failed to send test list!',
             'error':error
         });
     }
 }
}

module.exports = {
    getTestType
}