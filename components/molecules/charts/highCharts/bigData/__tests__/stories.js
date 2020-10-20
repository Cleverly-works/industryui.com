/**
 * highCharts - big data line chart
 */

// UI
import { HighChart } from 'components'
import Readme from '../README.md'

// Data
import { BigDataDataSource } from './initialDataSource'

// Styled Components
import styled from 'styled-components'

export default {
  args: {
    enableExport: false,
    titleText: 'Big data',
    tooltipTitle: 'data',
    violationMin: 24.5,
    violationMax: 26.5,
    withViolationLimits: true
  },
  argTypes: {
    violationMin: { control: { type: 'range', min: 0, max: 100, step: 0.5 } },
    violationMax: { control: { type: 'range', min: 0, max: 100, step: 0.5 } }
  },
  title: 'Molecules/Charts/highCharts/BigData',
  component: HighChart,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = props => {
  const violationCheck = ({ y }) => {
    if (props.args.withViolationLimits) {
      if (y > props.args.violationMax || y < props.args.violationMin) {
        return '#ee00ee'
      }
    }
  }

  const options = {
    chart: {},

    title: {
      text: props.args.titleText
    },

    exporting: {
      enabled: props.args.enableExport
    },
    series: [
      {
        name: props.args.tooltipTitle,
        data: BigDataDataSource.map((item, index) => {
          return {
            x: Date.parse(item.x),
            y: Number(item.y),
            marker: { fillColor: violationCheck({ y: item.y }) }
          }
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
      <HighChart options={options} constructorType='stockChart' />
    </StyledWrapper>
  )
}

export const main = args => {
  return <BaseComponent args={args} />
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`
