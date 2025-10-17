import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function BlogShow({ post }) {
    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">{post.title}</h2>}
        >
            <Head title={post.title} />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h1 className="text-2xl font-bold mb-4 text-gray-900">{post.title}</h1>

                        <p className="text-gray-800 whitespace-pre-line mb-6">
                            {post.description}
                        </p>

                        <Link
                            href={route('blog.index')}
                            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            ← Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
