import React from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { Provider } from 'react-redux'

import MainTemplate from 'templates/MainTemplate.js'
import Notes from 'views/Notes.js'
import Articles from 'views/Articles.js'
import Twitters from 'views/Twitters.js'
import DetailPage from './DetailsPage'
import LoginPage from 'views/LoginPage.js'
import { routes } from 'routes/index.js'
import store from 'store'

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact="true" path={routes.home} element={<Navigate to="/notes" />} />
          <Route path={routes.notes} element={<Notes />} />
          <Route path={routes.note} element={<DetailPage pageType="notes" />} />
          <Route path={routes.articles} element={<Articles />} />
          <Route path={routes.article} element={<DetailPage pageType="articles" />} />
          <Route path={routes.twitters} element={<Twitters />} />
          <Route path={routes.twitter} element={<DetailPage pageType="twitters" />} />
          <Route exact="true"path={routes.login} element={<LoginPage pageType={routes.login} />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
)

export default Root
