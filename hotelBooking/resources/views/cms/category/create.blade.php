@extends('layouts.cms.master')
@section('title', 'Create room type')
@section('content')
    <h2>Room type</h2>
    <div class="list-user m-auto pt-4">
        <form action="{{ route('roomTypes.store') }}" method="post">
            @csrf
            <div class="row mb-3">
                <x-form-input class="col-6" name="name" label="Full name" required="true" :oldValue="old('name')" placeholder="Example" />
            </div>
            <div class="row mb-3">
                <div class="col-6">
                    <label for="" class="form-label">Description</label>
                    <textarea name="description" class="form-control" cols="30" rows="5"></textarea>
                    @error('description')
                        <span class="text-danger" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>
            <div>
                <button class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
@endsection