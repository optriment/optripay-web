import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>OptriPay</title>
      </Head>

      {!session ? (
        <>
          <p>Not signed in</p>
          <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <main>
          {session.user && <h4>Signed in as {session.user.name}</h4>}
          <button onClick={() => signOut()}>Sign out</button>
        </main>
      )}
    </>
  )
}
