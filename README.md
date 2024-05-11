# blocky-typed

- CLI
- vanilla JS
- Download as an image file(`.png`)

## Comparison between existing packages

| package                                                    | Description                                                                                                                                                                                                                              | Type Support | Provides               | --- |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------- | --- |
| [`ethereum-blockies`](https://npmjs.org)                   | Used in `ethereum mist library`                                                                                                                                                                                                          | ❌           | `createIcon`, `render` |     |
| [`blockies`](https://www.npmjs.com/package/blockies)       | Identical to `ethereum-blockies`                                                                                                                                                                                                         | ❌           |                        |     |
| [`blockies-ts`](https://www.npmjs.com/package/blockies-ts) | [TypeScript version of `blockies`](https://github.com/pedrouid/blockies-ts/blob/bda2f2c124a3ab404dcf5077ac7a3545548edfb1/src/index.ts)                                                                                                   |              |                        |     |
| [`ethereum-blockies-png`]()                                | \* [output을 buffer, png로 변환해줌](https://github.com/petejkim/ethereum-blockies-png/blob/master/index.js) \n \* [render사용하지 않고, png로 만들어줌](https://github.com/MyCryptoHQ/ethereum-blockies-base64/blob/master/src/main.js) |              |                        |     |
| [`react-blockies`]()                                       | [React component of `blockies`](https://github.com/stephensprinkle-zz/react-blockies/blob/master/src/main.jsx)                                                                                                                           |              |                        |     |

## Reference

- [Use `'data:image/png;base64,' + buf.toString('base64')`](https://github.com/download13/blockies/blob/master/src/blockies.mjs)
- [Make the package zero dependency without use of `pngjs`, `pnglib`](https://github.com/GeorgeChan/pnglib/blob/master/lib/pnglib.js)
