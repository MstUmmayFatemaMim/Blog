import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: '', // no default, will select manually
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('users.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create User
                </h2>
            }
        >
            <Head title="Create User" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full border p-2 rounded-md"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    className="w-full border p-2 rounded-md"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type="password"
                                    className="w-full border p-2 rounded-md"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    className="w-full border p-2 rounded-md"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                />
                            </div>

                            {/* ✅ Role Dropdown */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Role</label>
                                <select
                                    className="w-full border p-2 rounded-md"
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)}
                                >
                                    <option value="">Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                            </div>

                            <div className="flex justify-between">
                                <Link
                                    href={route('users.index')}
                                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                                >
                                    Back
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
