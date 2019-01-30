<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;

class AccountController extends Controller
{
    public function getUser(){
        return $count = Users::where([
                ['username', '=', request('username')],
                ['password', '=', request('password')]])->count();
        
    }
}
