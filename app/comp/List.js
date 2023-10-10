"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function List() {
	const [data, setData] = useState([]);

	const getData = () => {
		axios.get('/api')
		.then(res => {
			setData(res.data);
		})
	}
	// 삭제
	const del = (num) => {
		axios.delete(`/api/${num}`)
		.then(res => {
			setData(res.data);
		})
	}
	// 수정
	const edit = (num) => {
		axios.put(`/api/${num}`, {name:`홍홍홍`})
		.then(res => {
			setData(res.data);
		})
	}
	useEffect(() => {
		getData();
	}, [])
	return (
		<>
			<div>List</div>
			{
				data.map(obj => (
					<li key={obj.num}>
						아이디 : {obj.id} /
						이름 : {obj.name} /
						메일 : {obj.email}
						{/* <p>아이디 : {obj.id} /</p>
						<p>이름 : {obj.name} /</p>
						<p>메일 : {obj.email}</p> */}
						<button onClick={() => {del(obj.num)}}>삭제</button>
						<button onClick={() => {edit(obj.num)}}>수정</button>
					</li>
				))
			}
		</>
	)
}

export default List