import { useSelector } from 'react-redux'

function Dashboard() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6">
      <h1 className="text-3xl mb-6">Dashboard</h1>
      <div className="border p-4 mb-6">
        <h2 className="text-xl mb-2">Profile Info</h2>
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <p>Name: {user?.username || 'Mohamed Fayez'}</p>
            <p>Email: mohamed.ngloh@vodafone.com</p>
            <p>Designation: Sr. SWE</p>
            <p>Location: Cairo, EG</p>
          </div>
        </div>
        <p className="mt-2 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
        </p>
      </div>
    </div>
  )
}

export default Dashboard