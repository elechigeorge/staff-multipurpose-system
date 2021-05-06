import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'

import HomeScreen from './screens/HomeScreen'

import MemberLoginScreen from './screens/MemberLoginScreen'
import MemberRegisterScreen from './screens/MemberRegisterScreen'
import ContactScreen from './screens/ContactScreen'
import AdminScreen from './screens/AdminScreen'
import MemberScreen from './screens/MemberScreen';
import MemberDashboard from './screens/MemberDashboard';


const App = () => {
  return (
    <Router>
      <Header />
      <main className=''>
        <Container>

          <Route path='/m/login' component={MemberLoginScreen} />
          <Route path='/m/register' component={MemberRegisterScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/members' component={MemberScreen} />
          <Route path='/admin' component={AdminScreen} />
          <Route path='/m/dashboard' component={MemberDashboard} />


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