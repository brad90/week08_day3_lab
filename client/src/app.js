const Bucketlist = require('./models/bucket_list.js');
const BLView = require('./views/bl_view.js');



document.addEventListener('DOMContentLoaded', () => {


const bucketlist = new Bucketlist


const container = document.querySelector("#list")
const blView = new BLView(container)


blView.render()
bucketlist.getData()

})
