<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Proyect;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
class ProyectController extends Controller
{
    public function getProyect(Request $request){
        $proyect = Proyect::get();
        return response()->json($proyect, 200);
    }
    public function postProyect(Request $request){
        $data = $request->json()->all();
        $proyect = Proyect::create([
            'aceptacion'=> $data['aceptacion'],
            'state'=> $data['state'],
        ]);
        return response()->json($user, 201);
    }
    public function putProyect(Request $request){
        $data = $request->json()->all();
        $proyect = Proyect::findOrFail($data['id']);
        $response = $proyect->update([
            'aceptacion'=> $data['aceptacion'],
            'state'=> $data['state'],
        ]);
        return response()->json($teacher, 201);
    }
    public function deleteProyect(Request $request){
        $data = $request->json()->all();
        $proyect = Proyect::findOrFail($data['id']);
        $response = $proyect->delete();
        return response()->json($proyect, 201);
    }
}
