/**
 * Hooks - useRenderCount
 */

// React
import { useRef } from 'react'

export const useRenderCount = (componentName) => {
  const renderCounter = useRef(1)

  console.info(
    (componentName ?? 'Name Not Defined') + ' rendered: ' + renderCounter.current++,
    renderCounter.current === 2 ? 'time' : 'times'
  )
}
