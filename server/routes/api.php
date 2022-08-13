<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//get all products
Route::get('products', [ProduitController::class, 'getProduct']);
//get product by id
Route::get('product/{id}', [ProduitController::class, 'getProductByuId']);
//add product
Route::post('addProduct', [ProduitController::class, 'addProduct']);
//upddate product by id
Route::put('updateProduct/{id}', [ProduitController::class, 'updateProduct']);
//delete product by id
Route::delete('deleteProduct/{id}', [ProduitController::class, 'deleteProduct']);



//get all products
Route::get('post', [PostController::class, 'getPost']);
//add product
Route::post('addPost', [PostController::class, 'addPost']);
//upddate product by id
Route::put('updatePost/{id}', [PostController::class, 'updatePost']);
//delete product by id
Route::delete('deletePost/{id}', [PostController::class, 'deletePost']);
