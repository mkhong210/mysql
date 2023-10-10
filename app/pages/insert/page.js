import Insert from '@/app/comp/Insert'
import Link from 'next/link'
import React from 'react'

function Page() {
	return (
		<>
			<h2>Insert 비주얼... 설명 </h2>
			{/* 컨포넌트로 불러오면 자체?서버 에서 로딩 후 불러오기 때문에 서버에 부담이 덜어준다  */}
				<Insert />
			<Link href='/'>Home</Link>
			{/* <Link href='../pages/list'>List</Link> */}
			<Link href='./list'>List</Link>
		</>
	)
}

export default Page