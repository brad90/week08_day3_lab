const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require ('../helpers/pub_sub.js')


const Bucketlist = function() {
  this.url = 'http://localhost:3000/api/bucketlist'
  this.request = new RequestHelper(this.url)
}

Bucketlist.prototype.getData = function () {
  this.request.get()
  .then((list) => {
    console.log("List - ready", list);
    PubSub.publish("bucket_list:data-loaded", list)
  })
  .catch(console.error)
};


module.exports = Bucketlist;
