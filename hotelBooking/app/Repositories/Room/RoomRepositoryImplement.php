<?php

namespace App\Repositories\Room;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\Room;

class RoomRepositoryImplement extends Eloquent implements RoomRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected $model;

    public function __construct(Room $model)
    {
        $this->model = $model;
    }

    public function getListRoom($searchData, $limit)
    {
        $qb = $this->model->query();
        $price = $searchData['price'] ?? null;
        $type = $searchData['type'] ?? null;
        if(!empty($searchData)) {
            if($price) {
                $qb = $qb->whereBetween('price', [$price[0], $price[1]]);
            }

            if($type) {
                $qb = $qb->where('type', $type);
            }
        }
        return $qb->with('roomType')
        ->whereNull("deleted_at")
        ->orderByDesc("created_at")
        ->paginate($limit);
    }
}
