import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'
import Row from './Row'
function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner/>
        <Row
            tittle = 'NETFLIX ORIGINALS'
            fetchUrl = {requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row
            tittle = 'Trending Now'
            fetchUrl = {requests.fetchTrending}
            isLargeRow
        />
        <Row
            tittle = 'Top Rated'
            fetchUrl = {requests.fetchTopRated}
            isLargeRow
        />
        <Row
            tittle = 'Action Movies'
            fetchUrl = {requests.fetchActionMovies}
            isLargeRow
        />
        <Row
            tittle = 'Comedy Mocies'
            fetchUrl = {requests.fetchComedyMovies}
            isLargeRow
        />
        <Row
            tittle = 'Horror Movies'
            fetchUrl = {requests.fetchHorrorMovies}
            isLargeRow
        />
        <Row
            tittle = 'Romance Movies'
            fetchUrl = {requests.fetchRomanceMovies}
            isLargeRow
        />
        <Row
            tittle = 'Documentaries'
            fetchUrl = {requests.fetchDocumentaries}
            isLargeRow
        />
    </div>

  )
}

export default HomeScreen