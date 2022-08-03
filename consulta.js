var axios = require('axios');
var data = JSON.stringify({
    "collection": "VENDEDORES",
    "database": "PosCristianArboleda",
    "dataSource": "ClusterADSI2364481",
    "projection": {
        "_id": 1
    }
});

var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-utbvl/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '30Xq4Y3PDWsS1GgEt6LBF6OQnZA87Bn9cysta1wVku6Bbkp7sLJ8aDakzXTvHrnc',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
