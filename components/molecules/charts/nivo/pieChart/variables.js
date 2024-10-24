/**
 * PieChart - Variables
 */

// UI
import THEME_COLOUR from '../../../../constants/colour'

const PIECHART = {
  animate: true,
  borderColor: { from: 'color', modifiers: [['darker', 0.2]] },
  borderWidth: 1,
  cornerRadius: 3,
  padAngle: 0.7,
  innerRadius: 0.5,
  legends: [
    {
      anchor: 'bottom',
      direction: 'row',
      translateY: 56,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: '#999',
      symbolSize: 18,
      symbolShape: 'circle',
      effects: [
        {
          on: 'hover',
          style: {
            itemTextColor: '#000'
          }
        }
      ]
    }
  ],
  margin: function () {
    return {
      top: 30,
      right: 80,
      bottom: this.showLegend ? 80 : 30, // props context
      left: 80
    }
  },
  motionStiffness: 90,
  motionDamping: 15,
  radialLabelsSkipAngle: 10,
  radialLabelsTextXOffset: 6,
  radialLabelsTextColor: THEME_COLOUR.dark,
  radialLabelsLinkOffset: 0,
  radialLabelsLinkDiagonalLength: 16,
  radialLabelsLinkHorizontalLength: 24,
  radialLabelsLinkStrokeWidth: 1,
  radialLabelsLinkColor: { from: 'color' },
  slicesLabelsSkipAngle: 10,
  slicesLabelsTextColor: THEME_COLOUR.dark,
  startAngle: -180
}

export default PIECHART
