import Modal from '../../../../molecules/modal/modal'
import React, { useState } from 'react'
import styled from 'styled-components'
import VerticalThreeDotsIcon from '../../../../icons/components/verticalThreeDots'
import Avatar from '../../../../atoms/avatar/avatar'
import Tooltip from '../tooltip/tooltip'
const EmailContainer = ({ email, header }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }
  const handleExpandClick = () => {
    setIsOpen(true)
  }
  const av = email.forwardedFrom?.avatar ? (
    <Avatar size="xxs" src={email.forwardedFrom.avatar} />
  ) : (
    <Avatar size="xxs" content={email.forwardedFrom.name[0]} />
  )
  const top = email.forwardedFrom && (
    <TopContainer>
      {av}
      <TextsWrapper nm>
        <TwoPartText>
          <ContactName>Forwarded:</ContactName>
        </TwoPartText>
        <TwoPartText>
          <EmailValue> {email.forwardedFrom.name}</EmailValue>
        </TwoPartText>
      </TextsWrapper>
    </TopContainer>
  )
  const tooltipContent = (
    <TextsWrapper>
      <ContactName as="p">from:</ContactName>
      <ContactName as={StyledP} light>
        {email.from.name} <EmailValue> {'<' + email.from.emailAddress + '>'}</EmailValue>
      </ContactName>
      <ContactName as="p">Date:</ContactName>
      <ContactName as={StyledP} light>
        {email.from.date}
      </ContactName>
      <ContactName as="p">Subject:</ContactName>
      <ContactName as="div" light>
        {email.from.subject}
      </ContactName>
    </TextsWrapper>
  )
  return (
    <EmailBriefContainer>
      {top}
      <EmailShortDescContainer>
        <TextsWrapper>
          <TwoPartText>
            <ContactName>Contact's Name:</ContactName>
            <ContactNameValue bold>{email.from.name}</ContactNameValue>
          </TwoPartText>
          <TwoPartText>
            <ContactName> Email:</ContactName>
            <EmailValue> {email.from.emailAddress}</EmailValue>
          </TwoPartText>
        </TextsWrapper>
        <Tooltip content={tooltipContent} direction="left">
          <ExpandButtonWrapper onClick={handleExpandClick}>
            <VerticalThreeDotsIcon colour="#aaaaaa" />
          </ExpandButtonWrapper>
        </Tooltip>
      </EmailShortDescContainer>

      <Modal open={isOpen} onClose={handleClose} removeChildrenWhenUnmounted>
        <ExpandedContentContainer>
          <HeadContainer> {header}</HeadContainer>
          {top}

          <ContentText dangerouslySetInnerHTML={{ __html: email.content }} />
        </ExpandedContentContainer>
      </Modal>
    </EmailBriefContainer>
  )
}
const StyledP = styled.p`
  margin-bottom: 0.75rem !important;
`
const TwoPartText = styled.p``
const HeadContainer = styled.div`
  display: flex;
  span {
    position: relative;
    top: unset;
    left: unset;
    right: unset;
    width: unset;
  }
`
const EmailBriefContainer = styled.div`
  background: ${({ theme }) => theme.MESSAGING.shortEmailPreviewBackground ?? 'transparent'};
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
`
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const EmailShortDescContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  p {
    margin: 0.25rem 0;
  }
`
const ValueText = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #2392dc;
  ${({ bold }) =>
    bold &&
    `
	  font-weight: 700;
		color: #3333ff;
	`}
`
const NameText = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #666666;
  max-width: 13rem;
  min-width: 13rem;
  margin: 0;
  white-space: break-spaces;
`

const ContactName = styled(NameText)`
  color: ${({ theme }) => theme.MESSAGING.emailContactNameColour ?? '#666666'};
  ${({ light }) => light && `font-weight:400 !important;`}
`
const ContactNameValue = styled(ValueText)`
  color: ${({ theme }) => theme.MESSAGING.emailContactNameValueColour ?? '#3333ff'};
`
const EmailValue = styled(ValueText)`
  color: ${({ theme }) => theme.MESSAGING.emailValueColour ?? '#2392dc'};
`

const ExpandedContentContainer = styled.div`
  background: ${({ theme }) => theme.MESSAGING.expandedEmailBackground ?? 'white'};
  border-radius: 8px;
  width: 80vw;
  max-width: 680px;
  min-height: 70vh;
  padding: 26px;
`
const TextsWrapper = styled.div`
  ${({ nm }) =>
    nm &&
    `
	p{
		margin:0;
		line-height:0.75rem;
	}
	`}
`
const ExpandButtonWrapper = styled.div`
  border-radius: 3px;
  padding: 2px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.MESSAGING.expandedEmailButtonColour ?? '#e6e6e6'};
  width: 23px;
  padding-left: 0;
  cursor: pointer;
`
const ContentText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.MESSAGING.expandedEmailTextColour ?? '#333333'};
`
export default EmailContainer
