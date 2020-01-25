<div align="center">
  <img width="80%" src="https://media.giphy.com/media/b6c0GsP1WLd4c/source.gif" alt=""/>
</div>
<h1 align="center">
  koala + lazy + kolay (means "easy" in Turkish) = koalazily 🐨
</h1>
<div align="center">
  <strong>Loading images lazily in a modern way using Intersection Observer API</strong>
</div>
<br>

![npm](https://img.shields.io/npm/v/koalazily)
![npm](https://img.shields.io/npm/dt/koalazily)
![Travis (.org)](https://img.shields.io/travis/suyalcinkaya/koalazily)
![NPM](https://img.shields.io/npm/l/koalazily)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/suyalcinkaya/koalazily.svg)](https://greenkeeper.io/)

## Install

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
<img
  data-koalazily="https://source.unsplash.com/300x200/?house/1"
  width="300"
  height="200"
  alt=""
/>
<img
  data-koalazily="https://source.unsplash.com/300x200/?house/2"
  width="300"
  height="200"
  alt=""
/>
<img
  data-koalazily="https://source.unsplash.com/300x200/?house/3"
  width="300"
  height="200"
  alt=""
/>
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
