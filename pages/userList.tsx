import { Session, unstable_getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { authOptions } from "./api/auth/[...nextauth]"
import AccessDenied from './components/AccessDenied'

export default function Profile() {
  const { data: session } = useSession()
  const [list, setList] = useState<Array<any>>([]);

  useEffect(
    () => {
      if (!session) return;

      fetch('/api/users').then(
        async (result) => {
          setList(await result.json())
        }
      )
    },
    [session]
  )

  if (!session) {
    return <AccessDenied />
  }

  return (
    <main className="">
      <h1 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">List of users</h1>
      <ol className="space-y-1 max-w-md list-decimal list-inside text-gray-500 dark:text-gray-400">
        {list?.map(
          (user) => {
            return (<li key={user.id}>
              <span className="font-semibold text-gray-900 dark:text-white">{user.name}</span> {user.email}
            </li>)
          }
        )}
      </ol>
    </main>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      session: await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
      ),
    },
  }
}






