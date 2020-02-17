const odbc = require('odbc');
var connectionString = 'DSN=alpha102b64;HOST=user-PC;DB=alpha102;UID=laksiri;PWD=laksiri;PORT=16400; ';

const con = odbc.connect(connectionString, (error, connection) => {
    if (error) {console.error(error)}
    connection.query('SELECT \"Emp-Code\", PW, EmpNoHash FROM pub.SelfUser', (err, result) => {
        if (err) {console.error(err)}
        console.log(result);
    });
});

