import React from 'react'
import HomeLayout from 'src/layouts/HomeLayout'
import Footer from 'src/components/Footer'
import { GetServerSideProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import axios from 'axios'

const fetchPeople = () =>
  axios.get('https://swapi.dev/api/people/').then((res) => res.data)

const fetchPlanet = () =>
  axios.get('https://swapi.dev/api/planets/').then((res) => res.data)

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('people', fetchPeople)
  await queryClient.prefetchQuery('planets', fetchPlanet)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const SignUp = (): JSX.Element => {
  const { data, isLoading } = useQuery('people', fetchPeople)
  const { data: dataPlanets } = useQuery('planets', fetchPlanet)

  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <HomeLayout>
      {data.results.map((item: { name: string }) => (
        <div key={item.name}>{item.name}</div>
      ))}
      {dataPlanets.results.map((item: { name: string }) => (
        <div key={item.name}>{item.name}</div>
      ))}
      <Footer />
    </HomeLayout>
  )
}
export default SignUp
