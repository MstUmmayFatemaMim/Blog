import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ posts = [] }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Blog Posts
                </h2>
            }
        >
            <Head title="Blog Posts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-end mb-6">
                            <Link
                                href={route('posts.create')}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                            >
                                Create Post
                            </Link>
                        </div>

                        {posts.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="bg-white border rounded-lg shadow hover:shadow-lg p-5"
                                    >
                                        <h3 className="text-lg font-semibold mb-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-3">
                                            {post.description?.substring(0, 100)}...
                                        </p>
                                        <div className="flex justify-between">
                                            <Link
                                                href={route('posts.show', post.id)}
                                                className="text-blue-500 hover:underline text-sm"
                                            >
                                                Read More
                                            </Link>
                                            <div>
                                                <Link
                                                    href={route('posts.edit', post.id)}
                                                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md text-sm mr-2"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route('posts.destroy', post.id)}
                                                    method="delete"
                                                    as="button"
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center">No posts found.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
