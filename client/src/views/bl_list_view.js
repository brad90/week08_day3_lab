const PubSub = require ('../helpers/pub_sub.js')


const ListView = function(container) {
  this.container = container
}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe("bucket_list:data-loaded", (event) => {
    this.render(event.detail)
  })


}


ListView.prototype.render = function (activities) {
    this.container.innerHTML = '';
    const list = activities
    // console.log(list);
    list.forEach((listItem) => {
      this.createActivityTitle(listItem);
      this.createDeleteButton(listItem);
    })

};

ListView.prototype.createActivityTitle = function (listItem) {
  const listContainer = document.createElement('h3')
  // console.log(listItem);
  listContainer.textContent = listItem.activity
  this.container.appendChild(listContainer)
}

ListView.prototype.createDeleteButton = function(listItem){
  const button = document.createElement('button');
  button.classList.add('delete-btn')
  button.value = listItem._id;

  button.addEventListener('click', (event) => {
    console.log(event);
    PubSub.publish('Bucketlist:activity-delete-clicked', event.target.value)
  })
this.container.appendChild(button)
}

module.exports = ListView;
