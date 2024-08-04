<?php
namespace App\Actions;

use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;

class GenerateCodeAction{

    public  function execute():string
    {
        $code=Str::random(4);
        if(Redis::exists($code))
        {
            return $this->execute();
        }

        return $code;
    }
}