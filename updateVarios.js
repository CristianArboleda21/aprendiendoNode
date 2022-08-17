var axios = require('axios');
var data = JSON.stringify({
    "collection": "VENDEDORES",
    "database": "PosCristianArboleda",
    "dataSource": "ClusterADSI2364481",
    "filter": {"edad":19},
    "update":{
        "$set":{
            "edad":21
        }
    }

});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-utbvl/endpoint/data/v1/action/updateMany',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '30Xq4Y3PDWsS1GgEt6LBF6OQnZA87Bn9cysta1wVku6Bbkp7sLJ8aDakzXTvHrnc',
    },
    data: data
};

/*
const option = {
    projection: {nombre:1, cedula:1}
}*/
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });