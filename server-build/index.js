/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = 8000;\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(\"^/$\", (req, res, next) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.log(err);\n      return res.status(500).send(\"Some error happened\");\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`App launched on ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Dashboard */ \"./src/pages/Dashboard.js\");\n/* harmony import */ var _pages_UserProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/UserProfile */ \"./src/pages/UserProfile.js\");\n/* harmony import */ var _pages_PostDetailPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/PostDetailPage */ \"./src/pages/PostDetailPage.js\");\n/* harmony import */ var _pages_PostDetailPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_PostDetailPage__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pages_AlbumDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/AlbumDetail */ \"./src/pages/AlbumDetail.js\");\n\n\n\n\n\n\n\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/user/:userId\",\n    component: _pages_UserProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/posts/:postId\",\n    component: _pages_PostDetailPage__WEBPACK_IMPORTED_MODULE_5___default.a\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"/albums/:albumId\",\n    component: _pages_AlbumDetail__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: fetchUsers, fetchUsersSuccess, clearUsers, fetchUser, fetchUserSuccess, clearUser, fetchAlbums, fetchAlbumsSuccess, clearAlbums, fetchAlbum, fetchAlbumSuccess, clearAlbum, fetchPosts, fetchPostsSuccess, clearPosts, addPost, addPostSuccess, deletePost, deletePostSuccess, editPost, editPostSuccess, fetchPost, clearPost, fetchPostSuccess, fetchComments, fetchCommentsSuccess, clearComments, addComment, addCommentSuccess, deleteComment, deleteCommentSuccess, editComment, editCommentSuccess, fetchPhotos, fetchPhotosSuccess, clearPhotos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsers\", function() { return fetchUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUsersSuccess\", function() { return fetchUsersSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearUsers\", function() { return clearUsers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUserSuccess\", function() { return fetchUserSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearUser\", function() { return clearUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAlbums\", function() { return fetchAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAlbumsSuccess\", function() { return fetchAlbumsSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAlbums\", function() { return clearAlbums; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAlbum\", function() { return fetchAlbum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchAlbumSuccess\", function() { return fetchAlbumSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearAlbum\", function() { return clearAlbum; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPosts\", function() { return fetchPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPostsSuccess\", function() { return fetchPostsSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPosts\", function() { return clearPosts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPostSuccess\", function() { return addPostSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePost\", function() { return deletePost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePostSuccess\", function() { return deletePostSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editPost\", function() { return editPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editPostSuccess\", function() { return editPostSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPost\", function() { return fetchPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPost\", function() { return clearPost; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPostSuccess\", function() { return fetchPostSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchComments\", function() { return fetchComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchCommentsSuccess\", function() { return fetchCommentsSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearComments\", function() { return clearComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addComment\", function() { return addComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCommentSuccess\", function() { return addCommentSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteComment\", function() { return deleteComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteCommentSuccess\", function() { return deleteCommentSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editComment\", function() { return editComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editCommentSuccess\", function() { return editCommentSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPhotos\", function() { return fetchPhotos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchPhotosSuccess\", function() { return fetchPhotosSuccess; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearPhotos\", function() { return clearPhotos; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/actions/types.js\");\n\n\nconst apiUrl = 'https://jsonplaceholder.typicode.com';\nconst fetchUsers = () => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/users`).then(response => {\n    dispatch(fetchUsersSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst fetchUsersSuccess = users => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_USERS\"],\n    users: users\n  };\n};\nconst clearUsers = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_USERS\"]\n  };\n};\nconst fetchUser = id => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/users/${id}`).then(response => {\n    dispatch(fetchUserSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst fetchUserSuccess = user => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_USER\"],\n    user: user\n  };\n};\nconst clearUser = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_USER\"]\n  };\n};\nconst fetchAlbums = userId => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/albums?userId=${userId}`).then(response => {\n    dispatch(fetchAlbumsSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst fetchAlbumsSuccess = albums => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_ALBUMS\"],\n    albums: albums\n  };\n};\nconst clearAlbums = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_ALBUMS\"]\n  };\n};\nconst fetchAlbum = id => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/albums/${id}`).then(response => {\n    dispatch(fetchAlbumSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst fetchAlbumSuccess = album => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_ALBUM\"],\n    album: album\n  };\n};\nconst clearAlbum = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_ALBUM\"]\n  };\n};\nconst fetchPosts = userId => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/posts?userId=${userId}`).then(response => {\n    dispatch(fetchPostsSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst fetchPostsSuccess = posts => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_POSTS\"],\n    posts: posts\n  };\n};\nconst clearPosts = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_POSTS\"]\n  };\n};\nconst addPost = (title, body) => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${apiUrl}/posts`, {\n    title,\n    body\n  }).then(response => {\n    dispatch(addPostSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst addPostSuccess = data => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"ADD_POST\"],\n    payload: {\n      id: data.id,\n      title: data.title,\n      body: data.body\n    }\n  };\n};\nconst deletePost = id => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${apiUrl}/posts/${id}`).then(response => {\n    dispatch(deletePostSuccess(id));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst deletePostSuccess = id => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_POST\"],\n    payload: {\n      id: id\n    }\n  };\n};\nconst editPost = (id, title, body) => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${apiUrl}/posts/${id}`, {\n    title,\n    body\n  }).then(response => {\n    dispatch(editPostSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst editPostSuccess = data => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_POST\"],\n    payload: {\n      id: data.id,\n      title: data.title,\n      body: data.body\n    }\n  };\n};\nconst fetchPost = id => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/posts/${id}`).then(response => {\n    dispatch(fetchPostSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst clearPost = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_POST\"]\n  };\n};\nconst fetchPostSuccess = post => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_POST\"],\n    post: post\n  };\n};\nconst fetchComments = postId => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/comments?postId=${postId}`).then(response => {\n    dispatch(fetchCommentsSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst fetchCommentsSuccess = comments => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_COMMENTS\"],\n    comments: comments\n  };\n};\nconst clearComments = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_COMMENTS\"]\n  };\n};\nconst addComment = (name, email, body) => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${apiUrl}/comments`, {\n    name,\n    email,\n    body\n  }).then(response => {\n    dispatch(addCommentSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst addCommentSuccess = data => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"ADD_COMMENT\"],\n    payload: {\n      id: data.id,\n      name: data.name,\n      email: data.email,\n      body: data.body\n    }\n  };\n};\nconst deleteComment = id => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${apiUrl}/comments/${id}`).then(response => {\n    dispatch(deleteCommentSuccess(id));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst deleteCommentSuccess = id => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"DELETE_COMMENT\"],\n    payload: {\n      id: id\n    }\n  };\n};\nconst editComment = (id, name, email, body) => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${apiUrl}/posts/${id}`, {\n    name,\n    email,\n    body\n  }).then(response => {\n    dispatch(editCommentSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst editCommentSuccess = data => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"EDIT_COMMENT\"],\n    payload: {\n      id: data.id,\n      name: data.name,\n      email: data.email,\n      body: data.body\n    }\n  };\n};\nconst fetchPhotos = albumId => dispatch => {\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${apiUrl}/photos?albumId=${albumId}`).then(response => {\n    dispatch(fetchPhotosSuccess(response.data));\n  }).catch(error => {\n    throw error;\n  });\n};\nconst fetchPhotosSuccess = photos => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"FETCH_PHOTOS\"],\n    photos: photos\n  };\n};\nconst clearPhotos = () => {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__[\"CLEAR_PHOTOS\"]\n  };\n};\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: FETCH_USERS, FETCH_USER, FETCH_POSTS, FETCH_POST, FETCH_ALBUMS, FETCH_ALBUM, FETCH_PHOTOS, FETCH_COMMENTS, CLEAR_USERS, CLEAR_USER, CLEAR_POSTS, CLEAR_POST, CLEAR_ALBUMS, CLEAR_ALBUM, CLEAR_PHOTOS, CLEAR_COMMENTS, ADD_POST, ADD_COMMENT, EDIT_POST, EDIT_COMMENT, DELETE_POST, DELETE_COMMENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USERS\", function() { return FETCH_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_USER\", function() { return FETCH_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_POSTS\", function() { return FETCH_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_POST\", function() { return FETCH_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ALBUMS\", function() { return FETCH_ALBUMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_ALBUM\", function() { return FETCH_ALBUM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_PHOTOS\", function() { return FETCH_PHOTOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_COMMENTS\", function() { return FETCH_COMMENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_USERS\", function() { return CLEAR_USERS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_USER\", function() { return CLEAR_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_POSTS\", function() { return CLEAR_POSTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_POST\", function() { return CLEAR_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_ALBUMS\", function() { return CLEAR_ALBUMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_ALBUM\", function() { return CLEAR_ALBUM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_PHOTOS\", function() { return CLEAR_PHOTOS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLEAR_COMMENTS\", function() { return CLEAR_COMMENTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST\", function() { return ADD_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT\", function() { return ADD_COMMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_POST\", function() { return EDIT_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_COMMENT\", function() { return EDIT_COMMENT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_POST\", function() { return DELETE_POST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_COMMENT\", function() { return DELETE_COMMENT; });\nconst FETCH_USERS = 'FETCH_USERS';\nconst FETCH_USER = 'FETCH_USER';\nconst FETCH_POSTS = 'FETCH_POSTS';\nconst FETCH_POST = 'FETCH_POST';\nconst FETCH_ALBUMS = 'FETCH_ALBUMS';\nconst FETCH_ALBUM = 'FETCH_ALBUM';\nconst FETCH_PHOTOS = 'FETCH_PHOTOS';\nconst FETCH_COMMENTS = 'FETCH_COMMENTS';\nconst CLEAR_USERS = 'CLEAR_USERS';\nconst CLEAR_USER = 'CLEAR_USER';\nconst CLEAR_POSTS = 'CLEAR_POSTS';\nconst CLEAR_POST = 'CLEAR_POST';\nconst CLEAR_ALBUMS = 'CLEAR_ALBUMS';\nconst CLEAR_ALBUM = 'CLEAR_ALBUM';\nconst CLEAR_PHOTOS = 'CLEAR_PHOTOS';\nconst CLEAR_COMMENTS = 'CLEAR_COMMENTS';\nconst ADD_POST = 'ADD_POST';\nconst ADD_COMMENT = 'ADD_COMMENT';\nconst EDIT_POST = 'EDIT_POST';\nconst EDIT_COMMENT = 'EDIT_COMMENT';\nconst DELETE_POST = 'DELETE_POST';\nconst DELETE_COMMENT = 'DELETE_COMMENT';\n\n//# sourceURL=webpack:///./src/actions/types.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  title: {\n    flexGrow: 1\n  },\n  link: {\n    color: '#fff'\n  }\n}));\n\nconst Header = props => {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    position: \"static\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    style: {\n      textDecoration: 'none'\n    },\n    to: \"/\",\n    className: classes.link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Social Media Dashboard\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/PhotoCard.js":
/*!*************************************!*\
  !*** ./src/components/PhotoCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"@material-ui/core/CardMedia\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Modal */ \"@material-ui/core/Modal\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Backdrop */ \"@material-ui/core/Backdrop\");\n/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fade */ \"@material-ui/core/Fade\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(theme => ({\n  card: {\n    width: 200,\n    margin: '15px',\n    display: 'flex',\n    flexDirection: 'column',\n    cursor: 'pointer'\n  },\n  media: {\n    objectFit: 'cover'\n  },\n  modal: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  paper: {\n    backgroundColor: '#fff',\n    padding: '30px'\n  }\n}));\n\nconst PhotoCard = props => {\n  const classes = useStyles();\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: classes.card,\n    onClick: handleOpen\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    component: \"img\",\n    className: classes.media,\n    height: \"150\",\n    image: props.photo.thumbnailUrl\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    style: {\n      flex: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    style: {\n      flex: 1\n    },\n    component: \"p\"\n  }, props.photo.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    className: classes.modal,\n    open: open,\n    onClose: handleClose,\n    closeAfterTransition: true,\n    BackdropComponent: _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6___default.a,\n    BackdropProps: {\n      timeout: 500\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    in: open\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.paper\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    component: \"h6\"\n  }, \"Photo Name: \", props.photo.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    component: \"p\"\n  }, \"Photo URL: \", props.photo.thumbnailUrl)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoCard);\n\n//# sourceURL=webpack:///./src/components/PhotoCard.js?");

/***/ }),

/***/ "./src/components/PhotoList.js":
/*!*************************************!*\
  !*** ./src/components/PhotoList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PhotoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PhotoCard */ \"./src/components/PhotoCard.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  cardStyle: {\n    display: 'flex',\n    flexFlow: 'row wrap',\n    justifyContent: 'center'\n  },\n  m: {\n    margin: '20px auto',\n    textAlign: 'center'\n  }\n}));\n\nconst PhotoList = props => {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.cardStyle, classes.m)\n  }, props.photos.map(photo => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PhotoCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      photo: photo,\n      key: photo.id,\n      user: props.user\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhotoList);\n\n//# sourceURL=webpack:///./src/components/PhotoList.js?");

/***/ }),

/***/ "./src/components/UserCard.js":
/*!************************************!*\
  !*** ./src/components/UserCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  cardStyle: {\n    margin: '15px 15px',\n    padding: '10px',\n    width: '25%',\n    height: 150,\n    display: 'inline-block',\n    backgroundColor: \"#fafafa\",\n    textAlign: 'left',\n    borderRadius: '10%',\n    '&:hover': {\n      backgroundColor: '#f0f0f0'\n    }\n  },\n  mb: {\n    marginBottom: 10,\n    color: '#333'\n  },\n  m: {\n    margin: '0 auto',\n    textAlign: 'center',\n    display: 'block'\n  },\n  p: {\n    padding: '50px 0'\n  }\n}));\n\nconst UserCard = props => {\n  const classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    maxWidth: \"md\",\n    className: classes.p\n  }, props.users.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.m\n  }, props.users.map(user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    className: classes.cardStyle,\n    key: user.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    style: {\n      textDecoration: 'none'\n    },\n    to: {\n      pathname: `/user/${user.id}`,\n      state: {\n        id: user.id\n      }\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h5\",\n    className: classes.mb\n  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    className: classes.mb\n  }, `@${user.username}`)))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null));\n};\n\nconst mapStateToProps = state => {\n  return {\n    users: state.users\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps)(UserCard));\n\n//# sourceURL=webpack:///./src/components/UserCard.js?");

/***/ }),

/***/ "./src/pages/AlbumDetail.js":
/*!**********************************!*\
  !*** ./src/pages/AlbumDetail.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n/* harmony import */ var _components_PhotoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PhotoList */ \"./src/components/PhotoList.js\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  p: {\n    padding: '50px 0'\n  },\n  photoWrap: {\n    margin: '30px 0'\n  }\n});\n\nclass AlbumDetail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentDidMount() {\n    // clear store state appropriately so the page does not render previous state.\n    this.props.clearAlbum();\n    this.props.clearPhotos();\n    this.props.clearUser();\n    let albumId = this.props.location.state ? this.props.location.state.id : this.props.match.params.albumId;\n    this.props.fetchAlbum(albumId);\n    this.props.fetchPhotos(albumId);\n    this.props.fetchUser(this.props.album.userId);\n  }\n\n  render() {\n    const {\n      classes\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      maxWidth: \"md\",\n      className: classes.p\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      variant: \"h6\",\n      gutterBottom: true\n    }, \"Album Title: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, this.props.album.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_6___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classes.photoWrap\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      variant: \"h6\",\n      gutterBottom: true\n    }, \"Photos:\"), this.props.photos.length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PhotoList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      photos: this.props.photos\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \" Loading Data \"))));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return {\n    album: state.album,\n    user: state.user,\n    photos: state.photos\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    fetchAlbum: albumId => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchAlbum\"])(albumId));\n    },\n    fetchUser: userId => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchUser\"])(userId));\n    },\n    fetchPhotos: albumId => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"fetchPhotos\"])(albumId));\n    },\n    clearAlbum: () => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"clearAlbum\"])());\n    },\n    clearPhotos: () => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"clearPhotos\"])());\n    },\n    clearUser: () => {\n      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__[\"clearUser\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__[\"withStyles\"])(styles)(AlbumDetail)));\n\n//# sourceURL=webpack:///./src/pages/AlbumDetail.js?");

/***/ }),

/***/ "./src/pages/Dashboard.js":
/*!********************************!*\
  !*** ./src/pages/Dashboard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/index */ \"./src/actions/index.js\");\n/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UserCard */ \"./src/components/UserCard.js\");\n\n\n\n\n\nclass Dashboard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  componentDidMount() {\n    this.props.fetchUsers();\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UserCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)));\n  }\n\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    fetchUsers: () => {\n      dispatch(Object(_actions_index__WEBPACK_IMPORTED_MODULE_2__[\"fetchUsers\"])());\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, mapDispatchToProps)(Dashboard));\n\n//# sourceURL=webpack:///./src/pages/Dashboard.js?");

/***/ }),

/***/ "./src/pages/PostDetailPage.js":
/*!*************************************!*\
  !*** ./src/pages/PostDetailPage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (41:8)\\nFile was processed with these loaders:\\n * ./node_modules/babel-loader/lib/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n| class PostPage extends React.Component {\\n>   state = {\\n|     showCommentForm: false\\n|   };\");\n\n//# sourceURL=webpack:///./src/pages/PostDetailPage.js?");

/***/ }),

/***/ "./src/pages/UserProfile.js":
/*!**********************************!*\
  !*** ./src/pages/UserProfile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (30:8)\\nFile was processed with these loaders:\\n * ./node_modules/babel-loader/lib/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n| \\n| class UserProfile extends React.Component {\\n>   state = {\\n|     showPostForm: false\\n|   };\");\n\n//# sourceURL=webpack:///./src/pages/UserProfile.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Backdrop\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Backdrop%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardMedia\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardMedia%22?");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Container%22?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Divider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fade\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Fade%22?");

/***/ }),

/***/ "@material-ui/core/Modal":
/*!******************************************!*\
  !*** external "@material-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Modal\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Modal%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clsx\");\n\n//# sourceURL=webpack:///external_%22clsx%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });