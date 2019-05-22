const PubSub = require ('../helpers/pub_sub.js')


const ListView = function(container) {
  this.container = container
}




ListView.prototype.render = function () {

  PubSub.subscribe("bucket_list:data-loaded", (event) => {

    const list = event.detail
    const listContainer = document.createElement('h3')
    
    list.forEach(listItem => listContainer.textContent = list)

  })

};

module.exports = ListView;
