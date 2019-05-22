const Bucketlist = require('./models/bucket_list.js');
const BLView = require('./views/bl_view.js');
const BLFormView = require('./views/bl_form_view.js')
const BLListView = require('./views/bl_lsit_view.js')



document.addEventListener('DOMContentLoaded', () => {


const bucketlist = new Bucketlist
bucketlist.bindEvents()


const blForm = document.querySelector('#form')
const blFormView = new BLFormView(blForm)
blFormView.bindEvents()


const container = document.querySelector("#list")
const blView = new BLView(container)



blView.render()
bucketlist.getData()

})
