/**
 * Components - Organisms - Charts - Schedule Chart - Story
 */

// React
import React, { useState } from 'react'

// UI
import Schedule from '../scheduleChart'
import Readme from '../README.md'
import { MAIN_SCHEDULES, SCHEDULES } from '../__mocks__/scheduleMock'

export default {
  component: Schedule,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Charts/Schedule'
}

const handleClick = ({ e, month, row }, additionalData) => {
  e.stopPropagation()
  console.log(additionalData)
  console.info('Month', month)
  console.info('Row', row)
  console.info('Cell CLick', e)
}

const handleRowClick = (row) => {
  console.info('Row Click', row)
}

export const main = (args) => (
  <Schedule
    {...args}
    handleFetchData={(mode) => MAIN_SCHEDULES[mode]}
    initialMode="year"
    handleClick={handleClick}
    handleRowClick={handleRowClick}
  />
)

export const WithPagination = (args) => {
  const [currentYear, setCurrentYear] = useState(2021)
  const handleYearChange = (page) => {
    setCurrentYear(page)
  }
  const years = [2020, 2021, 2022]
  return (
    <Schedule
      {...args}
      handleClick={handleClick}
      initialMode="year"
      handleFetchData={() => SCHEDULES[years.indexOf(currentYear)]}
      handleRowClick={handleRowClick}
      onYearChange={handleYearChange}
      currentYear={currentYear}
      yearRange={[2020, 2021, 2022]}
    />
  )
}