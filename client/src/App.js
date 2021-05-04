import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'

import HomeScreen from './screens/HomeScreen'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ContactScreen from './screens/ContactScreen'
import AdminScreen from './screens/AdminScreen'
import MemberScreen from './screens/MemberScreen'


const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
        <Container>

          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/members' component={MemberScreen} />
          <Route path='/admin' component={AdminScreen} />


          {/* <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          /> */}

          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>

    </Router>
  )
}

export default App