import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import People from './People.js'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/people" exact/>
        
        <Route path='/:category?/:searchString?' exact component={People}/>
        <Route path='/:category' exact component={People}/>      
      </Switch>
    </BrowserRouter>
  )
} 