
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <Card text={`Signed in as ${session.user!.email}`} onClick={() => signOut()}>Sign out</Card>
    )
  }
  return (<Card text='Not signed in' onClick={() => signIn()}>Sign in</Card>)
}

const Card = ({ children, onClick, text }: any) => {

  return (
    <div className="xflex space-x-2 xjustify-center my-5">

      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 pt-4">
          <p className="text-gray-700 text-base text-center">
            {text}
          </p>
        </div>
        <div className=" py-2 text-center">
          <button onClick={onClick} type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">{children}</button>
        </div>
      </div>
    </div>
  )
}



