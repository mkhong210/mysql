// [num] 폴더
import { queryExecute } from "../db";

export async function DELETE(req, {params}) {
	console.log(params);
	// const data = await queryExecute(`delete from member where num=?`,[params.id]);
	// const getData = await queryExecute(`select * from member`, []);
	await queryExecute(`delete from member where num=?`,[params.num]);
	const data = await queryExecute(`select * from member`);

	return Response.json(data);
}
export async function PUT(req, {params}) {
	// console.log(params);
	const data = await req.json();
	const q = await queryExecute(`update member set name=? where num =?`, [data.name, params.num]);
	const getData = await queryExecute(`select * from member`);

	return Response.json(getData);
}