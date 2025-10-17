import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';

export default function Index({ users = [] }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                             <div className="flex justify-end mb-6">
                               <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm ml-2">
                                                       <Link href={route('users.create')}>
                                                            Create
                                                        </Link>
                                                    </button>
                            </div>
                            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Email</th>
                                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700 border-b">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {users.length > 0 ? (
                                        users.map((user) => (
                                            <tr key={user.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm text-gray-600">{user.id}</td>
                                                <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>

                                                {/* <td className="px-6 py-4 text-center">
                                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
                                                        Edit
                                                    </button>
                                                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm ml-2">
                                                        Delete
                                                    </button>
                                                </td> */}
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="4"
                                                className="px-6 py-4 text-center text-gray-500"
                                            >
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
