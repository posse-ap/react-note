# 実践課題(11,12,14,16週目)

下記のようなメモアプリを作成します。

[Figmaのデザインファイル](https://www.figma.com/file/C3GCHbPqQRZSCKWmnKMr3U/React%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF?node-id=35%3A2 "Figma")

![UI](./react-note-ui.png "UI")


# 環境の使い方

#### 1. mainリポジトリをクローン

```shell
git clone https://github.com/posse-ap/react-note.git
```

#### 2. Docker環境を起動

```shell
cd react-note
docker-compose up -d

; api(laravelの初期設定)
docker-compose run react-note-web bash -c 'cd api && composer install && php artisan migrate'
```


#### 3. Reactの開発モードを起動

```shell
; コンテナ内に入る
docker-compose exec react-note-web bash

; reactディレクトリに移動
cd react

; reactの開発モードを開始
npm run start
```

#### 4. ブラウザから接続

reactの開発モードを起動すると、下記URLでアクセスできます。

> http://localhost:3000  
> ※httpsでは無いことに注意



# 課題

## 11〜12週目 ノートアプリ作成1

| 作業ブランチ | 実装サンプルブランチ |
|--------|------------|
| main   | ui         |


Reactハンズオンラーニング5〜7章で勉強してきた内容の復習です。  
ノートアプリのUIを作成して下さい。

チェックアウトするブランチは「main」ブランチです。

```shell
; 現在のブランチがmainブランチ以外の場合
git checkout main
```


reactの作業ディレクトリは
> /react

初期データは

> /react/note-data.json

を使って下さい。


## 14週目 ノートアプリの外部連携1 - REST

| 作業ブランチ     | 実装サンプルブランチ |
|------------|------------|
| 11〜12週目の続き | ui-rest    |

「11〜12週目 ノートアプリ作成1」で作成したものから、下記２点を修正して下さい。

- データをREST APIから取得してノート一覧を表示
  - 利用するAPI: http://localhost/rest/note
- 一覧で選択したノートを右側の編集エリアに表示
  - 利用するAPI: http://localhost/rest/note/{noteId}

※<span style="color: red; ">「新規作成」「削除」機能は、8章で学習する範囲を超えているので実装しなくてOKです。</span>

APIドキュメントは下記に用意してありますので、参考にして下さい。  
http://localhost/rest


## 16週目 ノートアプリの外部連携2 - GraphQL


| 作業ブランチ  | 実装サンプルブランチ |
|---------|------------|
| 14週目の続き | ui-graphql |


「14週目 ノートアプリの外部連携1 - REST」で作成したものを修正して、、

- データをGraphQL APIから取得してノート一覧を表示
  - ```graphql
    # クエリサンプル
    query {
      notes {
        id
        title
        body
      }
    }
    ```
- 一覧で選択したノートを右側の編集エリアに表示
  - ```graphql
    # クエリサンプル
    query($id:ID ) {
      note(id: $id) {
        id
        title
        body
      }
    }
    ```

※<span style="color: red; ">「新規作成」「削除」機能は、8章で学習する範囲を超えているので実装しなくてOKです。</span>
