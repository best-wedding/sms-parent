import Layout from 'Parent/components/Layout'
import React from 'react'
import Title from '../components/Courses/TItle'
import Cards from '../components/Courses/Cards'

export default function Courses() {
  return (
    <Layout>
        <Title />
        <Cards courses={[]} />
    </Layout>
  )
}
