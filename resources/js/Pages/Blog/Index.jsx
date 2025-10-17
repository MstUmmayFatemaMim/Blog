import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function BlogIndex({ posts }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Blog Posts</h2>}
        >
            <Head title="Blog" />

            <div className="py-12">
                <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {(!posts || !posts.data || posts.data.length === 0) ? (
                            <p className="text-gray-500 text-center col-span-full">No blog posts found.</p>
                        ) : (
                            posts.data.map((post) => (
                                <div key={post.id} className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-900">{post.title}</h3>
                                    <p className="text-gray-700 mb-3">
                                        {post.description?.substring(0, 100)}...
                                    </p>
                                    <Link
                                        href={route('blog.show', post.id)}
                                        className="text-blue-600 hover:underline text-sm font-medium"
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    {posts?.links && (
                        <div className="mt-6 flex justify-center flex-wrap gap-2">
                            {posts.links.map((link, index) => (
                                <button
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                    className={`px-3 py-1 rounded-md ${
                                        link.active
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                    onClick={() => link.url && (window.location.href = link.url)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
