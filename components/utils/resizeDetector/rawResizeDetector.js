/**
 *not memoized Resize Detector
 */

// React
import React from 'react'

// Resize Detector
import { withResizeDetector } from 'react-resize-detector'

// Style
import styled from 'styled-components'

const RawResizeDetector = withResizeDetector(({ children, height, onResize, style, width }) => {
  typeof window !== 'undefined' && window.requestAnimationFrame(() => onResize({ height, width }))
  return <ResizeDetectorWrapper style={style}>{children}</ResizeDetectorWrapper>
})

const ResizeDetectorWrapper = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: relative;
  top: 0;
  width: 100%;
`

export default RawResizeDetector
