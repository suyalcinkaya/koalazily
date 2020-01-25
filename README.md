<div align="center">
  <img width="60%" src="https://media.giphy.com/media/GiwTarPTh3tG8/giphy.gif" alt=""/>
</div>
<h1 align="center">
  koala + lazy + kolay (means "easy" in Turkish) = koalazily 🐨
</h1>
<div align="center">
  <strong>Loading images lazily in a modern way using Intersection Observer API</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/koalazily">
    <img src="https://img.shields.io/npm/v/koalazily.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/koalazily">
  <img src="https://img.shields.io/npm/dm/koalazily.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  </a>
  <a href="https://travis-ci.org/suyalcinkaya/koalazily">
    <img src="https://img.shields.io/travis/suyalcinkaya/koalazily.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/suyalcinkaya/koalazily/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/koalazily.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/suyalcinkaya/koalazily.svg)](https://greenkeeper.io/)

With package manager:

```sh
$ npm install koalazily

# OR

$ yarn add koalazily
```

Or with CDN:

```html
<script src="https://unpkg.com/koalazily@1.0.0/dist/koalazily.umd.js"></script>
```

## Usage

Add the `data-koalazily` tag to images you wish to load lazyly:

```html
  <img data-koalazily="https://source.unsplash.com/300x200/?house/1" width="300" height="200" alt="" />
  <img data-koalazily="https://source.unsplash.com/300x200/?house/2" width="300" height="200" alt="" />
  <img data-koalazily="https://source.unsplash.com/300x200/?house/3" width="300" height="200" alt="" />
```

Then initialize:

```js
koalazily();
```

Also see the [example](example/index.html).

## Contributing

Contributions are welcome!

1.  Fork it.
2.  Create your feature branch: `git checkout -b my-new-feature`.
3.  Commit your changes: `git commit -am 'Adds some feature'`.
4.  Push to the branch: `git push origin my-new-feature`.
5.  Submit a pull request.

Or open [an issue](https://github.com/suyalcinkaya/koalazily/issues).

## License

Licensed under the MIT License.
