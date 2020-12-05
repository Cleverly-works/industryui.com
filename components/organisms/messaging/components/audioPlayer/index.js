// import dynamic from 'next/dynamic'

// export const IUIMessagingAudioPlayer = dynamic(
//   () => import('./messagingAudioPlayer').then(module => module.MessagingAudioPlayer),
//   {
//     ssr: false
//   }
// )

// React
import { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { RHAP_UI } from 'react-h5-audio-player'
// Next
import dynamic from 'next/dynamic'

let AudioPlayer

const RHAP_UI = {
  CURRENT_TIME: 'CURRENT_TIME',
  CURRENT_LEFT_TIME: 'CURRENT_LEFT_TIME',
  PROGRESS_BAR: 'PROGRESS_BAR',
  DURATION: 'DURATION',
  ADDITIONAL_CONTROLS: 'ADDITIONAL_CONTROLS',
  MAIN_CONTROLS: 'MAIN_CONTROLS',
  VOLUME_CONTROLS: 'VOLUME_CONTROLS',
  LOOP: 'LOOP',
  VOLUME: 'VOLUME'
}

export const IUIMessagingAudioPlayer = ({ src, inMessage }) => {
  const [playerLoaded, setPlayerLoaded] = useState(false)

  useEffect(() => {
    AudioPlayer = dynamic(() => import('react-h5-audio-player'), { ssr: false })
    setPlayerLoaded(true)
  }, [])

  const showPlayer = () => {
    if (!playerLoaded) return <div>Loading ...</div>
    return (
      <AudioPlayer
        src={src}
        customProgressBarSection={
          inMessage
            ? [
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.VOLUME,
                <Spacer key='rh1' style={{ margin: '0 5px', width: '5px' }} />,
                RHAP_UI.CURRENT_TIME,
                <Slash key='rh2'>/</Slash>,
                RHAP_UI.DURATION
              ]
            : [RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR]
        }
        customControlsSection={[]}
        showJumpControls={false}
        showFilledVolume
      />
    )
  }

  return <Wrapper>{showPlayer()}</Wrapper>
}
const Wrapper = styled.div`
  flex: 1;
`

const Spacer = styled.div`
  margin: 0 5px;
  width: 5px;
`
const Slash = styled.div``
