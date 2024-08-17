こちらのアプリは安いチケット検索・予約などをサポートするアプリです。

＊＊＊事前準備＊＊＊

1.configでDB情報を設定

2.Postmanなどを導入

＊＊＊機能＊＊＊
認証・認可・バリデーション、。。。

I/User:新規登録、ログイン、画像アップロード、予約情報取得、CURD(未対応)、バリデーション。。。
User情報管理

1/新規登録:
*ロール: "ADMIN", "CLIENT"(既定値).

HTTP method: POST, URL: http://localhost:3000/api/v1/users/register
Input: {
    "username":"Nakano Aki",
    "email": "nakano004@gmail.com",
    "password": "na000",
    "phoneNumber": "0802293887"
};
Output: { "status": 200, "responseContent": {
    "id": 8,
    "username": "Nakano Aki",
    "email": "nakano004@gmail.com",
    "password": "$2a$10$33/CP5IPjmymH9bkwoz/eedbe9I0q5VtiTwC8Dt5HQRkVPPX0rxSK",
    "phoneNumber": "0802293887",
    "type": "client",
    "updatedAt": "2024-08-17T05:27:52.226Z",
    "createdAt": "2024-08-17T05:27:52.226Z"
} }

2/ログイン
*トークン取得・認証・認可可能

HTTP method: POST, URL: http://localhost:3000/api/v1/users/register
Input:{
    "email": "nakano004@gmail.com",
    "password": "na000"
};
Output: { "status": 200, "responseContent":　"Token"とともにログインしました。}

3/画像アップロード
*トークン必要

HTTP method: POST, URL: http://localhost:3000/api/v1/users/login
Input:画像、取得したトークン;
Output: { "status": 200,"responseContent": {
    "id": 7,
    "username": "Nakano Aki",
    "email": "nakano004@gmail.com",
    "password": "$2a$10$rNmyHsoK/N/oRfa1HCunjOUoiTewG.cDywtXsEL47DOczCfKZG3Ni",
    "phoneNumber": "0802293887",
    "avatar": "http://localhost:3000/public\\images\\avatar\\1723872913643_aquarius-logo.png",
    "type": "ADMIN",
    "createdAt": "2024-08-17T00:33:26.000Z",
    "updatedAt": "2024-08-17T05:35:13.654Z"
}} => avatarに画像URLが入力された。


4/旅行情報取得
ユーザー関連と旅行情報(Trips)を取得
*トークン必要、認証

HTTP method: GET, URL: http://localhost:3000/api/v1/users/upload-file

II/Stations:CURD、バリデーション。。。
Station情報管理

1.作成
*トークン必要、認証

HTTP method: POST, URL: http://localhost:3000/api/v1/stations/
Input: {
    "name":"Kansai",
    "address": "009 OKansai",
    "place": "Osaka"
};
Output: { "status": 200, "responseContent": {
    "id": 38,
    "name": "Kansai",
    "address": "009 OKansai",
    "place": "Osaka",
    "updatedAt": "2024-08-17T05:44:45.634Z",
    "createdAt": "2024-08-17T05:44:45.634Z"
} }

2.読み取り
*トークン必要、認証

HTTP method: GET, URL: http://localhost:3000/api/v1/stations/

3.フィルター読み取り
*トークン必要、クエリパラメータ(?key=value)

HTTP method: GET, URL: http://localhost:3000/api/v1/stations?name=Ha

4.更新
**トークン必要、認証、認可("ADMIN", "CLIENT")、:idでの更新

HTTP method: PUT, URL: http://localhost:3000/api/v1/stations/:id

5.削除
**トークン必要、認証、認可("ADMIN")、:idでの削除

HTTP method: DELETE, URL: http://localhost:3000/api/v1/stations/:id

III/Trips:CURD。。。
旅行情報管理
1.作成
*トークン必要、認証

HTTP method: POST, URL: http://localhost:3000/api/v1/trips/
Input: {
          "departure": 1,
          "destination": 2,
          "startingTime": "2024-10-20 10:30:55",
          "price": 200000,
          "createdAt": "2024-09-09 09:55:00",
          "updatedAt": "2024-09-17 10:23:00"
};
Output: { "status": 200, "responseContent": {
    "id": 36,
    "departure": 1,
    "destination": 2,
    "startingTime": "2024-10-20T01:30:55.000Z",
    "price": 200000,
    "updatedAt": "2024-08-17T05:54:38.125Z",
    "createdAt": "2024-08-17T05:54:38.125Z"
}}

2.読み取り
*トークン必要、認証

HTTP method: GET, URL: http://localhost:3000/api/v1/trips/

3.更新
**トークン必要、認証、認可("ADMIN", "CLIENT")、:idでの更新

HTTP method: PUT, URL: http://localhost:3000/api/v1/trips/:id

4.削除
*トークン必要、認証、認可("ADMIN")、:idでの削除

HTTP method: DELETE, URL: http://localhost:3000/api/v1/trips/:id

IV/Finger Print
ユーザーのブラウザーやデバイスの特徴を組み合わせた一意の識別子
*トークン必要

HTTP method: PUT, URL: http://localhost:3000/api/v1/finger-print
