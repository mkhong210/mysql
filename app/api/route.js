import { queryExecute } from "./db";

export async function GET() {
	// 불러오기(select)
	const data = await queryExecute('SELECT * from member');

	// 추가(insert)
	// const data = await queryExecute("insert into member (id, name, email) values ('abc', '홍길동', 'hong@gmail.com')");

	// 수정(update)
	// const data = await queryExecute(`update member set 바뀐값 where 바꿀것`);
	// const data = await queryExecute(`update member set name='호롤로' where num = 2`);
	
	// 삭제
	// const data = await queryExecute(`delete from member where num=4`);
	// 전체 삭제
	// const data = await queryExecute(`delete from member`);

	// 테이블 생성 - contact라는 이름의 테이블 생성 
	// const data = await queryExecute(`create table contact()`);
	// const data = await queryExecute(`
	// 	create table contact (
	// 		num int not null auto_increment, 
	// 		name varchar(30), 
	// 		email varchar(100), 
	// 		contents text, 
	// 		primary key(num)
	// 	)`
	// );

	// 테이블 삭제
	// const data = await queryExecute(`drop table contact`);

	return Response.json(data);
}


export async function POST(req) {
	const {id, name, email} = await req.json();
	// console.log(name, email, contents);
	// queryExecute는 함수 
	const data = await queryExecute(`insert into member (id, name, email) values (?,?,?)`, [id, name, email]);

	return Response.json([]);
}

// [id] 안으로 이동
// export async function DELETE(req) {
// 	const searchParams = useSearchParams();
// 	console.log(req);

// 	return Response.json([]);
// }