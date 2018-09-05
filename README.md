A simple Node / Express Server integrated with Socket.IO

---

# Getting Started

> Clone or fork the repo then:
>
> ```javascript
> npm install
> ```

### NPM Scripts:

> Load the express/socket server along with a small example of React clientside:
> Express is on port => 3050
> Socket Server is on port => 3334;
> frontend is on port => 3000 (webpack dev-server)

> ```javascript
> npm start
> ```

##### App Folder Structure

```
├── client
│   ├── components
│   │    └── AppRoot.js
│   │
│   ├── index.js
│   │
├── node_modules
│   │
├── public
│   └── index.html
├── server
│   ├── sockets
│   │    └── index.js
│   └── server.js
├── webpack
│   └── dev.config.js
├── .babelrc
├── .eslintrc
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
