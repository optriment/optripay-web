import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Menu } from './components'

type Props = {
  isMobile: boolean
  children: React.ReactNode
}

const Layout = ({ isMobile, children }: Props) => (
  <Grid padded="vertically" container={!isMobile} columns={1}>
    <Grid.Column>
      <Menu />
    </Grid.Column>

    <Grid.Column>{children}</Grid.Column>
  </Grid>
)

export default Layout
