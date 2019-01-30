<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Users;

class AccountController extends Controller
{
    public function getUser(){
        $count = Users::where([
                ['username', '=', request('username')],
                ['password', '=', request('password')]])->count();
        if($count == 1){
            return Users::where([
                ['username', '=', request('username')],
                ['password', '=', request('password')]])->first();
        }
        else{
            return $count;
        }
                
        
        
    }
    public function register(){
        $user = new Users;
        $user->fname = request('fname');
        $user->mname = request('mname');
        $user->lname = request('lname');
        $user->email = request('email');
        $user->username = request('username');
        $user->password = request('password');
        $user->save();
        return "Success";
    }
}
