import React from 'react'
import { useHasMounted } from '@/hooks/use-has-mounted'
import { LandingLayout } from '@/layouts'
import { LandingPage } from '@/screens/landing'
import { getIsSsrMobile } from '@/utils/get-is-ssr-mobile'
import { useIsMobile } from '@/utils/use-is-mobile'
import type { GetServerSidePropsContext } from 'next'

const Page: React.FC = () => {
  const hasMounted = useHasMounted()
  const isMobile = useIsMobile()

  if (!hasMounted) {
    return <p>Not mounted yet</p>
  }

  return (
    <LandingLayout isMobile={isMobile}>
      <LandingPage />
    </LandingLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  }
}

export default Page
