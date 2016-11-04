// From react-router-redux examples/server
import path from 'path'
import express from 'express'
// import serialize from 'serialize-javascript'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { configureStore } from './app/store'
import routes from './app/routes'

const app = express()

// app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.use(webpackDevMiddleware(webpack(webpackConfig), {
//   publicPath: '/__build__/',
//   stats: {
//     colors: true
//   }
// }))

const fontScript = `
        var WebFontConfig = {
          google: { families: [ 'Roboto:400,300,500:latin' ] }
        };
        (function() {
          var wf = document.createElement('script');
          wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
          wf.type = 'text/javascript';
          wf.async = 'true';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(wf, s);
        })();
`;

const HTML = ({ content, store }) => (
  <html>
    <head>
      {/*<link rel="stylesheet" type="text/css" href="/__build__/main.css" />*/}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }}/>
      <div id="devtools"/>
      <script dangerouslySetInnerHTML={{ __html: `window.__initialState__=${JSON.stringify(store.getState())};` }}/>
      <script dangerouslySetInnerHTML={{ __html: fontScript }}/>
      <script src="/public/bundle.js"/>
    </body>
  </html>
)

app.use(function (req, res) {
  const userAgent = req.headers['user-agent'];
  console.log('USERAGENT: ', userAgent);
  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore(memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  console.log('location: ', req.url);
  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      )

      console.log('res.send');
      res.send('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
    }
  })
})

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
})
