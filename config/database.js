const mysql = require('mysql');
const db_info = {
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b3342222cb8610', 
    password: '89729865', 
    database: 'heroku_0628ed843dc8462'
}
module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
        });
    }
}