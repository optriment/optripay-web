import { useSession } from 'next-auth/react'
import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { useIsMobile } from '@/utils/use-is-mobile'

const Screen = () => {
  const isMobile = useIsMobile()
  const { data: session, status } = useSession()

  return (
    <Grid container={!isMobile} columns={1}>
      <Grid.Column textAlign="center">
        {status === 'authenticated' && session?.user ? (
          <Header as="h1" content={`Welcome, ${session.user.name}!`} />
        ) : (
          <p>Loading...</p>
        )}
      </Grid.Column>
    </Grid>
  )
}

export default Screen
