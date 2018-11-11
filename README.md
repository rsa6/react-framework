- npm init -y

# 폴더들 만들기
- mkdir dist
- mkdir src
- touch ./dist/index.html

# 모듈들 설치
- npm install --save-dev webpack webpack-dev-server webpack-cli

# package.json 에 scripts 추가
- "start": "webpack-dev-server --config ./webpack.config.js --mode development",

# 웹팩 config 파일 만들기 
- touch webpack.config.js

# index.js
- touch ./src/index.js 
- 인덱스 안에 console.log("hello!");
- npm start 하면 컴파일은 되는데 먼가 안됨.

# 2차 모듈 바벨 설치
- npm install --save-dev @babel/core @babel/preset-env
- npm install --save-dev babel-loader
- npm install --save-dev @babel/preset-react

# package.json 에 추가
- .babelrc 있으면 안넣어도 됨.
```
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
```

# webpack.config.js 수정
```
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
```

# .babelrc 만들기
- touch .babelrc

# .babelrc 추가
``` 
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

# 드디어 리엑트 설치
- npm install --save react react-dom

# index.js 리액트 수정
- 알아서 넣어라

# 리액트 핫로더 설치
- npm install --save-dev react-hot-loader

# wepack.config.js 수정
```
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
```

# index.js 에 추가
- module.hot.accept()

# npm start
- 포트 번호는 8080 이다.
- 바꾸고 싶으면
- "start": "webpack-dev-server --config ./webpack.config.js --mode development" 를 
- 이런식으로 하면 된다. "start": "webpack-dev-server --port 8080 --config ./webpack.config.js --mode development" 
# 빌드
- webpack -p 하면 됨.