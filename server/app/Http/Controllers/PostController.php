<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;


class PostController extends Controller
{
    //getProduct
    public function getProduct()
    {
        return response()->json(Post::all(), 200);
    }

    // add Post
    public function addProduct(Request $request)
    {
        $post = Post::create($request->all());
        return response($post, 201);
    }

    // update Post
    public function updateProduct(Request $request, $id)
    {
        $post = Post::find($id);
        if (is_null($post)) {
            return response()->json(['message' => 'Post introuvable'], 404);
        }
        $post->update($request->all());
        return response($post, 200);
    }

    // delete Post
    public function deleteProduct(Request $request, $id)
    {
        $post = Post::find($id);
        if (is_null($post)) {
            return response()->json(['message' => 'Post introuvable'], 404);
        }
        $post->delete();
        return response(null, 204);
    }
}
