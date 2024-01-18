@extends('layouts.cms.master')
@section('title', 'List user')
@section('content')
    <h2>Users</h2>
    <div class="list-user m-auto">
        <table class="table table-striped table-hover w-100">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($users as $user)
                    <tr>
                        <td>{{ $user->id }}</td>
                        <td>{{ $user->name }}</td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->phone ?? "NULL" }}</td>
                        <td>
                            <div class="d-flex gap-3"> 
                                <a href="{{ route('users.edit', $user->id) }}">
                                    <i class="fa-solid fa-pen-to-square fs-5 text-primary"></i>
                                </a>
                                <button id="del-btn" class="confirm-delete border-0 bg-transparent" data-uid="{{$user->id}}" data-rname="{{route('users.delete', ['id' => ':id']) }}">
                                    <i class="fa-solid fa-trash fs-5 text-danger"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th colspan="4" class="text-center">
                            No Data
                        </th>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection
    