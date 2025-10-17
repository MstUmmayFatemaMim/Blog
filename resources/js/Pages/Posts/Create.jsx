import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing } = useForm({
        title: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('posts.store'));
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Create Post</h2>}
        >
            <Head title="Create Post" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full border p-2 rounded-md"
                                    placeholder="Enter post title"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full border p-2 rounded-md h-32"
                                    placeholder="Write your post content here..."
                                ></textarea>
                            </div>

                            <div className="flex justify-between">
                                <Link
                                    href={route('posts.index')}
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
