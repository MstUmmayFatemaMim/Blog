import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ roles = [] }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Roles</h2>}
        >
            <Head title="Roles" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex justify-end mb-6">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm ml-2">
                                    <Link href={route('roles.create')}>Create</Link>
                                </button>
                            </div>

                            <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">ID</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Role Name</th>
                                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 border-b">Access</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {roles.length > 0 ? (
                                        roles.map((role) => (
                                            <tr key={role.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 text-sm text-gray-600">{role.id}</td>
                                                <td className="px-6 py-4 text-sm text-gray-800">{role.role_name}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">
                                                    {role.access && role.access.length
                                                        ? role.access.join(', ')
                                                        : '-'}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="3"
                                                className="px-6 py-4 text-center text-gray-500"
                                            >
                                                No roles found.
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
