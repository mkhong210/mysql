var mysql = require('mysql');
var connection = mysql.createConnection({
	host: process.env.NEXT_PUBLIC_HOST,
	user: process.env.NEXT_PUBLIC_USER,
	password: process.env.NEXT_PUBLIC_PASSWORD,
	database: process.env.NEXT_PUBLIC_DATABASE,
	port: process.env.NEXT_PUBLIC_PORT
	// host: 'svc.sel5.cloudtype.app',
	// user: 'root',
	// password: '1234',
	// database: 'test',
	// port: '30697'
});

// 접속
connection.connect();

export async function queryExecute(str, value) {
	// 방법 1
	let data = await new Promise((resolve, reject) => {
		// resolve - 성공, reject - 실패
		// 접속 후 실행
		connection.query(str, value, function (error, results) {
			// value 가 배열문? 여기서 str이 insert문 / value가 [id,name,email] 
			// const data = await queryExecute(`insert into member (id, name, email) values (?,?,?)`, [id, name, email]);
			// https://www.npmjs.com/package/mysql 

			resolve(results);
		});
	})
	// terminal에 console이 찍힘
	// console.log(data)
	return data;

	// 방법 2
	// let a;
	// await connection.query(str, function (error, results) {
	// 	// str = sql 문장 , function = 콜백함수
	// 	// results = 조회한 내용 (str로 불러온 값)
	// 	a = results;
	// 	console.log(a);
	// });
	// return a;
};

// connection.end();