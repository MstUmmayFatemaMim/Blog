<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    // Show all posts
    public function index()
    {
        $posts = Post::latest()->get();
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    // Show create form
    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    // ✅ Store new post
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);

        Post::create($validated);

        return redirect()->route('posts.index')->with('success', 'Post created successfully!');
    }

    // Optional: delete post
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('posts.index')->with('success', 'Post deleted successfully!');
    }

    // Optional: show single post
    public function show(Post $post)
    {
        return Inertia::render('Posts/Show', ['post' => $post]);
    }

    // Optional: edit post
    public function edit(Post $post)
    {
        return Inertia::render('Posts/Edit', ['post' => $post]);
    }

    public function update(Request $request, Post $post)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
    ]);

    $post->update($validated);

    return redirect()->route('posts.index')->with('success', 'Post updated successfully!');
}

}
