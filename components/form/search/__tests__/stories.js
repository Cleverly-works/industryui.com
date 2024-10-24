/**
 * Form - Search
 */

// React
import React from 'react'

// React Hook Form
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// UI
import Divider from '../../../atoms/divider/divider'
import FormError from '../../error/error'
import Form from '../../form/form'
import Search from '../../search/search'
import Text from '../../../atoms/text/text'
import Readme from '../README.md'

export default {
  args: {
    appendSearchButton: false,
    appendSearchIcon: false,
    label: 'Go',
    placeholder: 'Search...',
    prependSearchIcon: false,
    type: 'search'
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['search', 'text']
      }
    }
  },
  title: 'Form/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const schema = object().shape({
    query: string().required()
  })

  const { errors, getValues, handleSubmit, register } = useForm({
    defaultValues: {
      query: props.value
    },
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.info(data)
  }

  const value = getValues()?.query?.toString()

  const defaultProps = {
    errors: errors,
    register: register,
    ...props
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)}>
      <Search {...defaultProps} />

      <Divider size="sm" />
      <Text>Search:</Text>
      <Text>{value}</Text>

      <FormError message={errors?.expiryAt?.message || ''} />
    </Form>
  )
}

export const main = (args) => <BaseComponent {...args} />
export const defaultValue = (args) => <BaseComponent {...args} value="XYZ" />
export const customLabel = (args) => <BaseComponent appendSearchButton {...args} label="Go" />
export const prependedIcon = (args) => <BaseComponent {...args} prependSearchIcon />
export const appendedIcon = (args) => <BaseComponent {...args} appendSearchIcon />
