<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

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
        try {
            $validated = $request->validate([
                'title' => 'required|max:255',
                'body'  => 'nullable|string',
            ]);
        } catch (ValidationException $e) {
            abort(405, '入力が不正です');
        }

        return Note::create($validated);
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
    public function update(int $id, Request $request)
    {
        $note = Note::findOrFail($id);

        dd($request->all());

        try {
            $validated = $request->validate([
                'title' => 'required|max:255',
                'body'  => 'nullable|string',
            ]);
        } catch (ValidationException $e) {

            dd($e);
            abort(405, '入力が不正です');
        }

        $note->fill($validated)->save();
        return $note;
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
