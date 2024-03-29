<?php

use App\Http\Controllers\Api\RoomController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/list-rooms', [RoomController::class, 'getListRoom']);

Route::middleware("auth:api")->group(function(){
    Route::get('/profile', [UserController::class, 'profile']);
    Route::get("/refresh", [UserController::class, "refreshToken"]);
    Route::get('/logout', [UserController::class, 'logout']);
});

