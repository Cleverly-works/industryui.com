/**
 * Components - Layout - Sidebar
 */

// React
import React, { useContext } from 'react'
import { array, func, node, string } from 'prop-types'

// UI
import Bootstrap from '../../layouts/bootstrap/bootstrap'
import ConfigContext from '../../services/config/context'
import Container from '../../atoms/grid/Container'
import Column from '../../atoms/grid/Column'
import Row from '../../atoms/grid/Row'

const SidebarLayout = ({ brand, children, copyright, footer, Navigation }) => {
  const { config } = useContext(ConfigContext)

  const { Sidebar } = config

  return (
    <Container fluid>
      <Row>
        <Column md={2}>
          <Sidebar />
        </Column>

        <Column md={10} style={{ padding: 0 }}>
          <Bootstrap brand={brand} copyright={copyright} footer={footer} Navigation={Navigation}>
            {children}
          </Bootstrap>
        </Column>
      </Row>
    </Container>
  )
}

SidebarLayout.propTypes = {
  brand: string,
  children: node.isRequired,
  copyright: array,
  footer: array,
  Navigation: func
}

export default SidebarLayout
