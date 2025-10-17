import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ post }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Post Details</h2>}
        >
            <Head title={post.title} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
                        <p className="text-gray-700 mb-6 whitespace-pre-line">{post.description}</p>

                        <div className="flex justify-between">
                            <Link
                                href={route('posts.index')}
                                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                            >
                                Back
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
