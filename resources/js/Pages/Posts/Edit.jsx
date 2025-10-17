// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head, Link, useForm } from '@inertiajs/react';

// export default function Edit({ post }) {
//     const { data, setData, put, processing } = useForm({
//         title: post.title || '',
//         description: post.description || '',
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         put(route('posts.update', post.id));
//     };

//     return (
//         <AuthenticatedLayout
//             header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit Post</h2>}
//         >
//             <Head title="Edit Post" />

//             <div className="py-12">
//                 <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white p-6 shadow rounded-lg">
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Title</label>
//                                 <input
//                                     type="text"
//                                     value={data.title}
//                                     onChange={(e) => setData('title', e.target.value)}
//                                     className="w-full border p-2 rounded-md"
//                                 />
//                             </div>

//                             <div className="mb-4">
//                                 <label className="block text-gray-700 mb-1">Description</label>
//                                 <textarea
//                                     value={data.description}
//                                     onChange={(e) => setData('description', e.target.value)}
//                                     className="w-full border p-2 rounded-md h-32"
//                                 ></textarea>
//                             </div>

//                             <div className="flex justify-between">
//                                 <Link
//                                     href={route('posts.index')}
//                                     className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
//                                 >
//                                     Back
//                                 </Link>
//                                 <button
//                                     type="submit"
//                                     disabled={processing}
//                                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                                 >
//                                     {processing ? 'Updating...' : 'Update'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage, router } from '@inertiajs/react';

export default function Edit({ post }) {
    const { data, setData, put, processing } = useForm({
        title: post.title || '',
        description: post.description || '',
    });

    const { errors } = usePage().props; // show validation errors

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('posts.update', post.id), {
            preserveScroll: true,
            onSuccess: () => {
                // ✅ force navigation back to Index page after success
                router.visit(route('posts.index'));
            },
        });
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit Post</h2>}
        >
            <Head title="Edit Post" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <form onSubmit={handleSubmit}>
                            {/* Title */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Title</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="w-full border p-2 rounded-md"
                                />
                                {errors?.title && (
                                    <p className="text-red-600 text-sm mt-1">{errors.title}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="w-full border p-2 rounded-md h-32"
                                ></textarea>
                                {errors?.description && (
                                    <p className="text-red-600 text-sm mt-1">{errors.description}</p>
                                )}
                            </div>

                            {/* Buttons */}
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
                                    {processing ? 'Updating...' : 'Update'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

