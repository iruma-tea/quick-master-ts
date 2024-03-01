# quick-master-ts
速習TypeScriptの学習用リポジトリ  
![画像](https://wings.msn.to/books/WGS-JSF-005/WGS-JSF-005.jpg "速習TypeScript")

## 環境構築 TypeScriptのインストール

### 1. 初期化コマンドの実行
- package.jsonを生成する  
コマンド: `npm init --yes`

### 2. ライブラリのインストール
- 以下のライブラリをインストールする

|ライブラリ名|内容|
|:---|:---|
|typescript|Node.jsをTypeScriptで実装するための静的型付け言語の基本ライブラリ|
|@types/node@20|TypeScriptのためのNode.jsの型情報を提供するライブラリ|
|ts-node|TypeScriptファイルをJavaScriptにコンパイルし、Node.js上で実行するためのツール|
- コマンド: `npm install --save-dev typescript @types/node@20 ts-node`  または `npm install --D typescript @types/node@20 ts-node`

### 3. 設定ファイルの実装
- tscondig.json ファイルを生成する  
コマンド: `npx tsc --init`   
- **tscondig.json**の必要最低限の更新を行う。

|設定名|設定値|
|:---|:---|
|sourceMap|true|
|outDir|./dist|

- package.jsonの更新
1. scriptの内容を以下の内容に更新する  
`"scripts": {`   
`   "build": "npx tsc",`   
`    "build:watch": "npx tsc --wathc"`   
`  }`  
2. repositoryの要素を追加する  
`  "repository": {`  
`    "type": "git",`  
`    "url": "https://github.com/iruma-tea/quick-master-ts.git"`  
`  }`  


## 参考URL
- https://qiita.com/shitikakei/items/9714968bd4a5a53cba3c
- https://go-tech.blog/nodejs/typescript-env/