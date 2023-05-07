import { signOut } from 'next-auth/react'
import React from 'react'
import { Menu } from 'semantic-ui-react'

const Component = () => (
  <Menu stackable icon>
    <Menu.Item as="a" href="/seller" icon="home" />

    <Menu.Menu position="right">
      <Menu.Item
        as="a"
        href={`/api/auth/signout`}
        onClick={(e) => {
          e.preventDefault()
          signOut()
        }}
      >
        Sign out
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default Component
