/**
 * Random Color
 */

import Readme from '../README.md'
import styled from 'styled-components'
import { RandomKey } from '../randomKey'

export default {
  title: 'Utils/RandomKey',
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const RandomKeysShowCase = () => {
  const elementsLength = 50
  const arr = Array.from(Array(elementsLength).keys())
  const keys = arr.map((_, __) => {
    return RandomKey()
  })

  return (
    <ElementsWrapper>
      {arr.map((_, index) => {
        console.log(keys[index])
        return <p key={keys[index]}>{keys[index]}</p>
      })}
    </ElementsWrapper>
  )
}

const ElementsWrapper = styled.div`
  width: 100%;
  p {
    padding: 0;
    margin: 0;
  }
`
