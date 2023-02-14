# Expense Tracker

![expense-tracker](/public/photos/expense-tracker.gif)

家庭記帳本(Expense Tracker)是使用Node.js、Express以及MongoDB做出的網頁應用程式

可直接透過此網址瀏覽線上版本: https://salty-depths-14527.herokuapp.com/

你可以使用下方預設的帳號密碼登入，也可使用Facebook或Google驗證的方式登入

```
email: user1@example.com
password: 123
```

## Features

- 透過Name, Email, Password 進行註冊
- 使用Email或是Facebook/Google驗證的方式登入
- 登出帳號

在登入之後，使用者可以:

- 檢視每一筆消費支出，以及總支出
- 透過篩選的方式，檢視該項目的花費
- 增加/編輯/刪除 消費清單

![RWD](/public/photos/expense-tracker-RWD.gif)
![Login page](/public/photos/login.png)
![Register page](/public/photos/register.png)
![Expense page](/public/photos/expense.png)

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js v14.15.1](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [mongoDB](https://www.mongodb.com/)

## Install Expense Tracker

#### Clone the repository locally

```
$ git clone https://github.com/freeway26tw/expense-tracker.git
```

#### Install project dependencies

```
$ cd expense-tracker
$ npm install
```

#### Add .env file

為了能夠使用Facebook/Google登入驗證，你必須將以下的資訊輸入到 .env

Facebook id 和 secret: [Facebook Developers](https://developers.facebook.com/)
Google id 和 secret: [Google Cloud Platform](https://console.cloud.google.com/?hl=zh-TW)

```
FACEBOOK_ID=SKIP
FACEBOOK_SECRET=SKIP
FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback

GOOGLE_CLIENT_ID=SKIP
GOOGLE_CLIENT_SECRET=SKIP
GOOGLE_CALLBACK=http://localhost:3000/auth/google/callback

SESSION_SECRET=ThisIsMySecret
MONGODB_URI=mongodb://localhost/expense-tracker
PORT=3000
```

## Use Expense Tracker

#### Import seed data

為了建立基礎資料(User, Category, Record)，須按下方指令操作

```
$ npm run seed
```

#### Start the app

如果已事先安裝了 [nodemon](https://www.npmjs.com/package/nodemon)，可直接執行下方指令
```
$ npm run dev
```

否則執行下方指令

```
$ node app.js
```

The server will start running on http://localhost:3000/