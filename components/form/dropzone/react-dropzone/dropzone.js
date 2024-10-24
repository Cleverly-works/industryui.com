/**
 * Dropzone
 * Allows a user to Upload multiple images
 */

// React
import React, { useEffect, useState } from 'react'
import { bool, string } from 'prop-types'

// React Dropzone
import { useDropzone } from 'react-dropzone'

// Style
import styled, { css } from 'styled-components'

// UI
import Column from '../../../atoms/grid/Column'
import Row from '../../../atoms/grid/Row'
import Text from '../../../atoms/text/text'
import Accept from './accept'
import DropzonePreview from './preview'

const Dropzone = ({ accept, disabled, multiple, onChange }) => {
  const [files, setFiles] = useState([])

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    accept: accept,
    disabled: disabled,
    multiple: multiple,
    onDrop: (acceptedFiles) => {
      const accepted = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )

      setFiles(accepted)

      if (onChange) {
        onChange(accepted)
      }
    }
  })

  const removeFile = (file) => {
    const newFiles = [...files]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  const thumbs = () => {
    return (
      <StyledContainer fluid>
        <Row>
          {files.map((file) => (
            <Column md={3} key={file.name}>
              <DropzonePreview
                file={file}
                handleRemove={() => removeFile(file)}
                index={file.name}
              />
            </Column>
          ))}
        </Row>
      </StyledContainer>
    )
  }

  return (
    <>
      <StyledContainer
        dragActive={isDragActive}
        dragAccept={isDragAccept}
        dragReject={isDragReject}
        disabled={disabled}
        {...getRootProps()}
      >
        <input {...getInputProps()} />

        {isDragAccept && <Text>Accepted</Text>}
        {isDragReject && <Text>Rejected</Text>}

        {isDragActive ? (
          <Text>Drop here</Text>
        ) : (
          <>
            <Text>Drop, or click to select</Text>
            {accept && <Accept accept={accept} />}
            {multiple ? <Text>Accepts multiple files</Text> : <Text>Single file only</Text>}
          </>
        )}
      </StyledContainer>

      {files.length > 0 && thumbs()}
    </>
  )
}

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.COLOUR.light};
  border-color: ${({ dragAccept, dragReject, theme: { COLOUR } }) =>
    (dragReject && COLOUR.danger) || (dragAccept && COLOUR.success)};
  border-radius: 0.25rem;
  border-style: ${({ dragActive }) => (dragActive ? 'solid' : 'dashed')};
  border-width: 2px;
  cursor: pointer;
  margin-bottom: 1rem;
  height: 25vh;
  padding: 1rem;
  outline: none;
  overflow: auto;
  text-align: center;
  transition: border 0.24s ease-in-out;
  width: 100%;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`

Dropzone.propTypes = {
  accept: string,
  disabled: bool,
  multiple: bool
}

Dropzone.defaultProps = {
  accept: 'image/*',
  disabled: false,
  multiple: true
}

export default Dropzone
