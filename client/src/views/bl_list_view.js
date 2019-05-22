const PubSub = require ('../helpers/pub_sub.js')


const ListView = function(container) {
  this.container = container
}

ListView.prototype




ListView.prototype.render = function () {

  PubSub.subscribe("bucket_list:data-loaded", (event) => {
    console.log("iam in the kist view", event.detail);
    const list = event.detail
    console.log(list);
    list.forEach((listItem) => {
      const listContainer = document.createElement('h3')
      listContainer.textContent = listItem.activity
      this.container.appendChild(listContainer)
    })

  })
};

module.exports = ListView;
