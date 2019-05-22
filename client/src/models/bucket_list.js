const RequestHelper = require('../helpers/request_helper.js')
const PubSub = require('../helpers/pub_sub.js')


const Bucketlist = function() {
  this.url = 'http://localhost:3000/api/bucketlist'
  this.request = new RequestHelper(this.url)
}


Bucketlist.prototype.bindEvents = function () {
  PubSub.subscribe("BLView:Activity-submitted", (event) => {
    this.postActivity(event.detail)
  })

  PubSub.subscribe('Bucketlist:activity-delete-clicked', (event) =>{
    this.deleteActivity(event.detail)
  })
};

Bucketlist.prototype.getData = function () {
  this.request.get()
  .then((list) => {
    console.log("List - ready", list);
    PubSub.publish("bucket_list:data-loaded", list)
  })
  .catch(console.error)
};

Bucketlist.prototype.postActivity = function (activity) {
  console.log(activity);
  this.request.post(activity)
    .then((activities) => {
      console.log("i am post activities" ,activities);
      PubSub.publish("bucket_list:data-loaded", activities)
    })
    .catch(console.error)
}

Bucketlist.prototype.deleteActivity = function (activityID) {
  this.request.delete(activityID)
  .then((activities) => {
    PubSub.publish("bucket_list:data-loaded", activities)
  })
  .catch(console.error)
}


module.exports = Bucketlist;
