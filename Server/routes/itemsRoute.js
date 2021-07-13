const {getItems,getItem,addItem,deleteItem,updateItem} =require("../controllers/itemController");
function itemRoutes(fastify,options,done){
    //Get all items
    fastify.get("/items",getItems);
    //Get Single Item
    fastify.get("/items/:id",getItem);
    //Add Item
    fastify.post('/items',addItem);
    //Delete Item
    fastify.delete('/items/:id',deleteItem);
    //Update Item
    fastify.put('/items/:id',updateItem)
    done()
}
module.exports = itemRoutes;