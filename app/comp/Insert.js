"use client";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

function Insert() {
  const navi = useRouter();

  const inserFn = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const values = Object.fromEntries(formdata);
    console.log(values);

    axios.post('/api', values);
    navi.push('./list');
  }
  return (
    <>
      <form onSubmit={inserFn}>
				<p><input type="text" name="id" /></p>
				<p><input type="text" name="name" /></p>
				<p><input type="email" name="email" /></p>
				{/* <p><textarea name="contents"></textarea></p> */}
				<p><input type="submit" value="저장" /></p>
			</form>
    </>
  )
}

export default Insert