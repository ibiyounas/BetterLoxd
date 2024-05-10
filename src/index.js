import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import MovieContainer from './MovieContainer';
import MovieForm from './MovieForm';
import MovieDetails from './MovieDetails';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: "/movies",
        element: <MovieContainer />
      },
      {
        path: "movies/new",
        element: <MovieForm />
      },
      {
        path: "projects/:id",
        element: <MovieDetails />
      }
    ]
  },
  {
    path:"/about",
    element: <About />
  }
]


const router = createBrowserRouter(routes)

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

