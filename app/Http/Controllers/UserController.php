<?php

namespace App\Http\Controllers;
use App\Models\User; 
use Inertia\Inertia;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
{
    $users = User::all();
    return Inertia::render('Users/Index', ['users' => $users]);
}

public function create()
{
    return Inertia::render('Users/Create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|confirmed|min:6',
        'role' => 'required|string',
    ]);

    \App\Models\User::create([
        'name' => $validated['name'],
        'email' => $validated['email'],
        'password' => bcrypt($validated['password']),
        'role' => $validated['role'],
    ]);

    return redirect()->route('users.index')->with('success', 'User created successfully.');
}


}
