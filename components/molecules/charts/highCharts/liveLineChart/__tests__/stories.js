/**
 * highCharts - live line chart
 */

// React
import React, { useEffect, useRef } from 'react'

// Style
import styled from 'styled-components'

// UI
import HighChart from '../../highChart'
import { LiveChartSubscriber } from '../../../../../services/componentCommunication/componentCommunication'
import MessageNames from '../../../../../services/componentCommunication/messageNames'
import Readme from '../README.md'

// Data
import LiveChartInitialTestDataSource from './initialDataSource'
import LiveHighChartTestStreamDataSource from './streamDatasource'

export default {
  args: {
    enableExport: false,
    titleText: 'Live random data',
    tooltipTitle: 'Random data',
    useUTC: true
  },
  argTypes: {},
  component: HighChart,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Charts/High Charts/Liveline'
}

const BaseComponent = (props) => {
  const series = useRef(null)
  useEffect(() => {
    LiveHighChartTestStreamDataSource.start()
    const Subscription = LiveChartSubscriber.subscribe((message) => {
      if (
        series.current &&
        message.name === MessageNames.UPDATE_CHART_DATA &&
        message.id === 'testChart'
      ) {
        const x = message.payload.x
        const y = message.payload.y
        series.current.addPoint(
          {
            x,
            y
          },
          true,
          true
        )
      }
    })
    return () => {
      LiveHighChartTestStreamDataSource.stop()
      Subscription.unsubscribe()
    }
  }, [])

  const options = {
    chart: {
      events: {
        load: function () {
          series.current = this.series[0]
        }
      }
    },

    time: {
      useUTC: props.args.useUTC
    },

    rangeSelector: {
      buttons: [
        {
          count: 1,
          type: 'minute',
          text: '1M'
        },
        {
          count: 2,
          type: 'minute',
          text: '2M'
        },
        {
          count: 5,
          type: 'minute',
          text: '5M'
        },
        {
          type: 'all',
          text: 'All'
        }
      ],
      inputEnabled: false,
      selected: 1
    },

    title: {
      text: props.args.titleText
    },

    exporting: {
      enabled: props.args.enableExport
    },
    series: [
      {
        name: props.args.tooltipTitle,
        data: LiveChartInitialTestDataSource.map((item) => {
          return { x: item[0], y: item[1] }
        }),
        marker: {
          enabled: true,
          lineWidth: 1,
          lineColor: null
        }
      }
    ]
  }

  return (
    <StyledWrapper>
      <HighChart options={options} constructorType="stockChart" />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`

export const main = (args) => {
  return <BaseComponent args={args} />
}
