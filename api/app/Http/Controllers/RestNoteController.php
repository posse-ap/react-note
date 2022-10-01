<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RestNoteController extends Controller
{
    /**
     * ノートの取得
     * @return Collection
     */
    public function index(): Collection
    {
        return Note::get();
    }


    /**
     * ノートの追加
     *
     * @param \Illuminate\Http\Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'body'  => 'nullable|string',
        ]);


        dd($validated);

        //Note::create()


    }

    /**
     * ノートの取得(ID指定)
     *
     * @param int $id
     * @return Note|null
     */
    public function show(int $id): null|Note
    {
        return Note::findOrFail($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     * @return Response
     */
    public function update(Request $request, int $id)
    {
        $note = Note::firstOrFail($id);

        $validated = $request->validate([
            'title' => 'required|max:255',
            'body'  => 'nullable|string',
        ]);

        //$note->fill()
        //$note->save();

        //return
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy(int $id)
    {
        Note::destroy($id);
    }
}
