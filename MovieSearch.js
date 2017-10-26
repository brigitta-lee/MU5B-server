var util = require('util');
const { OperationHelper } = require('apac');

const opHelper = new OperationHelper({
    awsId:     '',
    awsSecret: '',
    assocId:   ''
});

opHelper.execute('ItemSearch', {
  'SearchIndex': 'Books',
  'Keywords': 'harry potter',
  'ResponseGroup': 'ItemAttributes,Offers'
}).then((response) => {
  //getting the right response in the console
    console.log("Results object: ", response.result.ItemSearchResponse.Items);
    console.log("Raw response body: ", response.responseBody);
    return response.result;
}).catch((err) => {
    console.error("Something went wrong! ", err);
});
