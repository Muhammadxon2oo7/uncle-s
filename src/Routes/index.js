import React from 'react'
import { Route ,Switch } from 'react-router-dom'
import Home from './Home/Home'
import Notfound from './Notfound/Notfound'
const index = () => {
  return (
    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/*'>
            <Notfound/>
        </Route>
    </Switch>
  )
}

export default index