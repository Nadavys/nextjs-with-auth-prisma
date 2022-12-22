import { unstable_getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'

import { authOptions } from './api/auth/[...nextauth]'
import AccessDenied from './components/AccessDenied'


export default function Profile() {
  const { data: session } = useSession()

  if (!session) {
    return <AccessDenied />
  }



  return (
    <>
      <h1 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        User Profile - protected page
      </h1>

      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">

        </div>
        <div className="flex flex-col items-center pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={session!.user!.image} alt={session!.user.name} />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session?.user?.name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{session?.user?.email}</span>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        { ...authOptions }
      ),
    },
  }
}