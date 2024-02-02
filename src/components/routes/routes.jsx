import React from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from '../../layout/mainLayout'
import HomePage from '../../pages/home.page'
import AboutPage from '../../pages/aboutus.page'
import WhatWeDo from '../../pages/whatwedo.page'
import MediaPage from '../../pages/media.page'
import ContactPage from '../../pages/contact.page'

export default function RoutesPage() {
    let routes =useRoutes(
        [
            {
                path:'',
                element:<MainLayout/>,
                children:
                [
                    {path:'/', element:<HomePage/>},
                    {path:'/about_us', element: <AboutPage/>},
                    {path:'/what_we_do', element: <WhatWeDo/>},
                    {path:'/media', element: <MediaPage/>},
                    {path:'/contact', element: <ContactPage/>},
                ]
            }
        ]
    )
  return routes;
}
