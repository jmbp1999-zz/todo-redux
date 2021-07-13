
const mysqlPromise = require("../config/database");
const { type } = require("os");
const getItems = async(req,reply)=>{
    const connection = await mysqlPromise.DATABASE.getConnection();
    try {
        let res = await connection.execute(`SELECT * FROM items`);
        reply.send(res[0]);
        console.log(res[0]);
        connection.release()
        
    } catch (error) {
        const errorMessage = {
            message:error.msg,
            type:type(error),
            statusCode:error.res.statusCode
        }
        res.send(errorMessage)
        connection.release();
    }
}
const  getItem = async (req,reply)=>{
    try {
        const connection = await mysqlPromise.DATABASE.getConnection();
        const {id} = req.params;
        let res = await connection.execute(`SELECT * FROM items WHERE id = ?`, [id]);
        let [item] = res[0];
        reply.send(item);
        connection.release()
        
    } catch (error) {
        const errorMessage = {
            message:error.msg,
            type:type(error),
            statusCode:error.res.statusCode
        }
        res.send(errorMessage)
        connection.release();
    }
}
const addItem = async (req,reply)=>{
    try {
        const {name} = req.body
        const connection = await mysqlPromise.DATABASE.getConnection();
        let res = await connection.execute(`INSERT INTO items(name) VALUES (?)`, [name]);
        let id = await connection.execute(`SELECT MAX(id) AS id FROM items`);
        reply.send({...id[0][0],
            name:name
        });
        connection.release()
    } catch (error) {
        const errorMessage = {
            message:error.msg,
            type:type(error),
            statusCode:error.res.statusCode
        }
        res.send(errorMessage)
        connection.release()
        
    }

};
const deleteItem = async(req,reply)=>{
    try {
        const {id} = req.params;
        const connection = await mysqlPromise.DATABASE.getConnection();
        let res = await connection.execute(`DELETE FROM items WHERE id=?`, [id]);
        console.log(id);
        reply.send({messsage:"Successfully Deleted the Item!"});
        connection.release()
    } catch (error) {
        const errorMessage = {
            message:error.msg,
            type:type(error),
            statusCode:error.res.statusCode
        }
        res.send(errorMessage)
        connection.release()
    }
};
const updateItem = async (req,reply)=>{
    try {
        const {id} = req.params;
        const {name} = req.body;
        const connection = await mysqlPromise.DATABASE.getConnection();
        let res = await connection.execute(`UPDATE items SET name = ? WHERE id = ?`,[name,id]);
        reply.send({messsage:"Successfully Updated !"});
        connection.release()
    } catch (error) {
        const errorMessage = {
            message:error.msg,
            type:type(error),
            statusCode:error.res.statusCode
        }
        res.send(errorMessage)
        connection.release()
    }

};

module.exports = {
    getItem,
    getItems,
    addItem,
    deleteItem,
    updateItem
}