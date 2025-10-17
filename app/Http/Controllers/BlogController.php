<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Post;
use Inertia\Inertia;

class BlogController extends Controller
{
    // Show all blog posts
    public function index()
    {
        $posts = Post::latest()->paginate(6); // you can change number per page

        return Inertia::render('Blog/Index', [
            'posts' => $posts,
        ]);
    }

    // Show single post
    public function show(Post $post)
    {
        return Inertia::render('Blog/Show', [
            'post' => $post,
        ]);
    }
}
