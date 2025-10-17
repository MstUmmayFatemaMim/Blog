import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useRef, useEffect } from 'react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        role_name: '',
        access: [],
    });

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const accessOptions = [
        'User Create',
        'User Index',
        'Role Create',
        'Role Index',
        'Post Create',
        'Post Index',
        'Post Show',
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleAccessChange = (option) => {
        if (data.access.includes(option)) {
            setData('access', data.access.filter((a) => a !== option));
        } else {
            setData('access', [...data.access, option]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('roles.store'));
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create Role</h2>}
        >
            <Head title="Create Role" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <form onSubmit={handleSubmit}>
                            {/* Role Name */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Role Name</label>
                                <input
                                    type="text"
                                    value={data.role_name}
                                    onChange={(e) => setData('role_name', e.target.value)}
                                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                                />
                                {errors.role_name && <p className="text-red-500 text-sm mt-1">{errors.role_name}</p>}
                            </div>

                            {/* Access Dropdown */}
                            <div className="mb-4 relative" ref={dropdownRef}>
                                <label className="block text-gray-700 mb-2">Access</label>
                                <button
                                    type="button"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className="w-full border border-gray-300 rounded-md p-2 bg-blue-500 text-white"
                                >
                                    {data.access.length > 0 ? data.access.join(', ') : 'Please select'}
                                </button>

                                {showDropdown && (
                                    <div className="absolute z-10 mt-2 bg-white border rounded-md w-full shadow">
                                        <label className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={data.access.length === accessOptions.length}
                                                onChange={(e) => {
                                                    if (e.target.checked) setData('access', accessOptions);
                                                    else setData('access', []);
                                                }}
                                                className="mr-2"
                                            />
                                            All
                                        </label>

                                        {accessOptions.map((option, i) => (
                                            <label
                                                key={i}
                                                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={data.access.includes(option)}
                                                    onChange={() => handleAccessChange(option)}
                                                    className="mr-2"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between mt-6">
                                <Link
                                    href={route('roles.index')}
                                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                                >
                                    Back
                                </Link>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    {processing ? 'Saving...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
