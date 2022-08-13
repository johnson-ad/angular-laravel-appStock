<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produit;

class ProduitController extends Controller
{
    //getProduct
    public function getProduct()
    {
        return response()->json(Produit::all(), 200);
    }

    public function getProductByuId($id)
    {
        $product = Produit::find($id);
        if (is_null($product)) {
            return response()->json(['message' => 'Produit introuvable'], 404);
        }
        return response()->json(Produit::find($id), 200);
    }

    // add Produit
    public function addProduct(Request $request)
    {
        $product = Produit::create($request->all());
        return response($product, 201);
    }

    // update Produit
    public function updateProduct(Request $request, $id)
    {
        $product = Produit::find($id);
        if (is_null($product)) {
            return response()->json(['message' => 'Produit introuvable'], 404);
        }
        $product->update($request->all());
        return response($product, 200);
    }

    // delete Produit
    public function deleteProduct(Request $request, $id)
    {
        $product = Produit::find($id);
        if (is_null($product)) {
            return response()->json(['message' => 'Produit introuvable'], 404);
        }
        $product->delete();
        return response(null, 204);
    }
}
