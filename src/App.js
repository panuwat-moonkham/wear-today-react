import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withHelmet from './utils/withHelmet'
import routes from './config/routes'
import GlobalStyle from './components/GlobalStyle'
import NavBar from './components/Navbar'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback='...loading'>
          <NavBar />
          <Switch>
            {Object.keys(routes).map(reuteKey => (
              <Route key={reuteKey} {...routes[reuteKey]} />
            ))}
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </>
  )
}

export default withHelmet('Wear Today')(App)
