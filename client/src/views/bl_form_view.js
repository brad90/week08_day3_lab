const PubSub = require('../helpers/pub_sub.js')


const BLFormView = function(form){
  this.form = form;
}



BLFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    console.log(event)
    this.handleSubmit(event)
  })
};


BLFormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newActivity = this.createActivity(event.target)
  console.log(newActivity);
  PubSub.publish("BLView:Activity-submitted", newActivity)
  event.target.reset()
  // const newActivity = this.createActivity(event.target)
}

BLFormView.prototype.createActivity = function(form) {

  const newActivity = {
    activity: form.activity.value
  }
  return newActivity
}





module.exports = BLFormView ;
