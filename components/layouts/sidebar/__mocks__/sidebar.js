/**
 * Components - Layouts - Sidebar - Mock
 */

// React
import React from 'react'

// UI
import Navbar from '../../../molecules/navbar/navbar'

export const COPYRIGHT = [
  {
    name: 'Terms and conditions',
    to: '/policies/terms-conditions'
  },

  {
    name: 'Privacy policy',
    to: '/policies/privacy-policy'
  },

  {
    name: 'Site map',
    to: '/policies/site-map'
  }
]

export const FOOTER = [
  {
    size: { sm: 6, md: 3 },
    header: 'About',
    text: '<p>About</p>'
  },
  {
    size: { sm: 6, md: 3 },
    header: 'Site Links',
    text: '<p>Links</p>'
  },
  {
    size: { sm: 6, md: 3 },
    header: 'Who we Help',
    text: '<p>Help</p>'
  },
  {
    size: { sm: 6, md: 3 },
    header: 'Contact',
    text: '<p>Contact</p>'
  }
]

export const NAVIGATION = () => {
  const Default = {
    right: [
      {
        id: 'navHome',
        name: 'Home',
        to: '/'
      }
    ]
  }

  return <Navbar links={Default} />
}
