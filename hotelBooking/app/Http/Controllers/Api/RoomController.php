<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\Room\RoomService;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    protected RoomService $roomService;

    public function __construct(RoomService $roomService) {
        $this->roomService = $roomService;
    }

    public function getListRoom() {
        $data = $this->roomService->getListRoom([], null);
        return response()->json([
            'status' => true,
            'messge' => "List rooms",
            'data' => $data->toArray()
        ]);
    }
}
