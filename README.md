# blockies-typed

- CLI
- vanilla JS
- Download as an image file(`.png`)

## Comparison between existing packages

| package                                                      | Description                                                                                                                            | Provides               | CLI Support | Type Support |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- | ------------ |
| [`blockies-typed`](https://npmjs.org/package/blockies-typed) |                                                                                                                                        |                        | ✅          | ✅           |
| [`ethereum-blockies`](https://npmjs.org)                     | Used in `ethereum mist library`                                                                                                        | `createIcon`, `render` | ❌          | ❌           |
| [`ethereum-blockies-png`]()                                  | [convert to PNG](https://github.com/petejkim/ethereum-blockies-png/blob/master/index.js)                                               |                        | ❌          | ❌           |
| [`ethereum-blockies-base64`]()                               | [Base64](https://github.com/MyCryptoHQ/ethereum-blockies-base64/blob/master/src/main.js)                                               |                        | ❌          | ❌           |
| [`blockies`](https://www.npmjs.com/package/blockies)         | Identical to `ethereum-blockies`                                                                                                       |                        | ❌          | ❌           |
| [`blockies-ts`](https://www.npmjs.com/package/blockies-ts)   | [TypeScript version of `blockies`](https://github.com/pedrouid/blockies-ts/blob/bda2f2c124a3ab404dcf5077ac7a3545548edfb1/src/index.ts) |                        | ❌          | ✅           |
| [`react-blockies`]()                                         | [React component of `blockies`](https://github.com/stephensprinkle-zz/react-blockies/blob/master/src/main.jsx)                         |                        | ❌          | ❌           |

## Reference

- [Use `'data:image/png;base64,' + buf.toString('base64')`](https://github.com/download13/blockies/blob/master/src/blockies.mjs)
- [Make the package zero dependency without use of `pngjs`, `pnglib`](https://github.com/GeorgeChan/pnglib/blob/master/lib/pnglib.js)
