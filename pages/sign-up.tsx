import React from 'react'
import HomeLayout from 'layouts/HomeLayout'
import Link from 'components/Link'
import Footer from 'components/Footer'
import { GetServerSideProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import axios from 'axios'

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('people', () => axios.get('https://swapi.dev/api/people/').then(res => res.data))
  await queryClient.prefetchQuery('planets', () => axios.get('https://swapi.dev/api/planets/').then(res => res.data))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const SignUp = () => {
  const { data, isLoading } = useQuery('people', () => axios.get('https://swapi.dev/api/people/').then(res => res.data))
  const { data: dataPlanets } = useQuery('planets', () => axios.get('https://swapi.dev/api/planets/').then(res => res.data))

  
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <HomeLayout>
      {data.results.map((item: {name: string}) => {
        return <div key={item.name}>{item.name}</div>
      })}
      {dataPlanets.results.map((item: {name: string}) => {
        return <div key={item.name}>{item.name}</div>
      })}
      <Footer />
    </HomeLayout>
  )
}
export default SignUp
