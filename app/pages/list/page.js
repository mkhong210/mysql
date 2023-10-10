import List from '@/app/comp/List'
import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <>
      <h1>List</h1>
      <List />
      <Link href='/'>홈</Link>
      <Link href='./insert'>글작성</Link>
    </>
  )
}

export default Page