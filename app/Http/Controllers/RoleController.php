<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        return Inertia::render('Roles/Index', ['roles' => $roles]);
    }

    public function create()
    {
        return Inertia::render('Roles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'role_name' => 'required|string|max:255',
            'access' => 'nullable|array',
        ]);

        Role::create([
            'role_name' => $validated['role_name'],
            'access' => $validated['access'],
        ]);

        return redirect()->route('roles.index')->with('success', 'Role created successfully.');
    }
}
