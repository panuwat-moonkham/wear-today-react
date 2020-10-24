import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import withHelmet from './utils/withHelmet'
import routes from './config/routes'
import GlobalStyle from './components/GlobalStyle'
import NavBar from './components/NavBar'
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

<<<<<<< HEAD
export default withHelmet('WearToday')(App)
=======
export default withHelmet('Wear Today')(App)
>>>>>>> 74b4a57e2889b4a73053606618edadc2e8f8a039
