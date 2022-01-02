//require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpress = require('aws-serverless-express');
const app = express();
const {
    connection 
} = require('./connection');
app.use(express.static("public"));

const {
    getTestType
} = require('./get_test_type');
const {
    getTestType_id
} = require('./get_test_type_by_id');
const {
    createTestType
} = require('./create_test_type');
const {
    updateTestType
} = require('./update_test_type');
const {
    deleteTestType
} = require('./delete_test_type');

app.use(express.json());
const cors = require('cors');
app.use(cors());




//////////////////////////////////////////END_OF_GET_POLYMER_TYPES/////////////////////////////////////////




/////////////////////////////////////////GET_PRODCTS_API////////////////////////////////////////////////////////







///////////////////////////////////////////END_OF_GET_PRODUCT_TYPE////////////////////////////////////////////////////////


//////////////////////////////////////////////GET_TEST_TYPE/////////////////////////////////////////////////////////


app.post('/test/getTestTypes', async function (req, res) {
    res.send(await getTestType());
});





///////////////////////////////////////END_OF_GET_TEST_TYPE////////////////////////////////////////////////////


/////////////////////////////////////////////GET_TEST_TYPE_BY ID//////////////////////////////////////////////////




app.post('/test/getTestTypeById', async function (req, res) {
    var id = req.body.Id;
    if (!id) {
        res.send({
            'status': 0,
            'message': 'Id is null'
        });
        return 0;
    }
    res.send(await getTestType_id(id));
});



///////////////////////////////END_OF_GET_TEST_TYPE_BY_ID///////////////////////////////////////////////////







/////////////////////////////////////////CREATE_TEST_TYPE///////////////////////////////////////////////////


app.post('/test/createTestType', async function (req, res) {
    var x = req.body;
    console.log(x);
    if (!x.name || !x.code || !x.Id || !x.prodt_id || !x.status) {
        res.send({
            'status': 0,
            'message': 'one or more fields missing'
        });
        return 0;
    }
    res.send(await createTestType(x));

});

//////////////////////////////////////////////////END_OF_CREATE_TEST_TYPE////////////////////////////////////////////////////






////////////////////////////////////////////////UPDATE_TEST_TYPE//////////////////////////////////////////////////



app.post('/test/updateTestType', async function (req, res) {
    var id = req.body.Id;
    if (!id) {
        res.send({
            'status': 0,
            'message': 'id is not provided'
        });
        return 0;
    }
    res.send(await updateTestType(req.body));
    

});


//////////////////////////////END_OF_UPDATE_TEST_TYPE//////////////////////////////////////////////////////

////////////////////////////////////////////////DELETE_TEST_TYPE//////////////////////////////////////////////


app.post('/test/deleteTestType', async function (req, res) {
    var id = req.body.Id;
    if (!id) {
        res.send({
            'status': 0,
            'message': 'Id is null'
        });
        return 0;
    }
    res.send(await deleteTestType(req.body));

});


/////////////////////////////////////////////////END_OF_DELETE_TEST_TYPE_BY_ID//////////////////////////////////////////////



/////////////////////////////////////////////GET_QUOTES//////////////////////////////////////////////////



////////////////////////////////////////////END_OF_SEND_EMAIL////////////////////////////////////////////////

// app.listen(3000, function(req,res){
//     console.log(`server is listeing on port.......`);
// })

const server=awsServerlessExpress.createServer(app);
exports.handler=(event,context)=>{
	console.log("Event handler :"+JSON.stringify(event));
	awsServerlessExpress.proxy(server,event,context);
}