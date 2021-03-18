// React
import React from 'react'

import { propTypes } from '../props'
import { IconWrapper } from '../wrapper'

export const ThermometerIcon = (props) => {
  return (
    <IconWrapper {...props} mainSize={480}>
      <path d="M263.98,325.432V72c0-2.125-0.847-4.163-2.352-5.664c-1.414-1.619-3.504-2.484-5.648-2.336l-32,0.104c-4.418,0-8,3.582-8,8v253.32c-27.952,13.238-39.879,46.629-26.642,74.58c7.438,15.706,21.747,27.069,38.73,30.756c3.891,0.815,7.856,1.23,11.832,1.24c30.928,0.011,56.009-25.052,56.02-55.98C295.928,354.407,283.497,334.718,263.98,325.432zM277.701,389.31c-2.458,6.956-6.794,13.096-12.528,17.738v-0.016c-9.481,7.665-21.923,10.624-33.84,8.048c-21.567-4.783-35.174-26.144-30.391-47.712c2.983-13.451,12.679-24.421,25.663-29.032c3.211-1.115,5.367-4.137,5.376-7.536V80.08l16-0.08v250.8c0.001,3.403,2.155,6.432,5.368,7.552C274.145,345.699,285.048,368.514,277.701,389.31z" />
      <path d="M327.616,319.948c-8.125-12.715-18.92-23.51-31.636-31.636V240h24c4.418,0,8-3.582,8-8s-3.582-8-8-8h-24v-16h24c4.418,0,8-3.582,8-8s-3.582-8-8-8h-24v-16h24c4.418,0,8-3.582,8-8s-3.582-8-8-8h-24v-16h24c4.418,0,8-3.582,8-8s-3.582-8-8-8h-24v-16h24c4.418,0,8-3.582,8-8s-3.582-8-8-8h-24V56c-0.035-30.913-25.087-55.965-56-56c-30.913,0.035-55.965,25.087-56,56v232.312c-48.4,30.928-62.564,95.236-31.636,143.636c30.928,48.4,95.236,62.564,143.636,31.636C344.38,432.655,358.544,368.347,327.616,319.948z M239.98,464c-48.601,0.059-88.048-39.292-88.107-87.893c-0.038-31.522,16.786-60.657,44.107-76.379c2.475-1.429,4-4.07,4-6.928V56c0.026-22.08,17.92-39.974,40-40c22.075,0.04,39.96,17.925,40,40v236.8c0,2.858,1.525,5.499,4,6.928c42.124,24.241,56.621,78.041,32.379,120.165C300.637,447.214,271.502,464.038,239.98,464z" />
    </IconWrapper>
  )
}

export default ThermometerIcon

ThermometerIcon.propTypes = propTypes