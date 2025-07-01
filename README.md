# StreamLayerSDK Vite integration example

Find the docs at [https://streamlayer.github.io/sdk-web](https://streamlayer.github.io/sdk-web)

## How to start

- install dependencies `pnpm i`
- build sdk-web in sdk-web folder and copy to node_modules ex: `pnpm build && rm -rf ../sdk-web-tv/node_modules/.vite ../sdk-web-tv/node_modules/@streamlayer/react/lib && cp -r ./packages/react/lib ../sdk-web-tv/node_modules/@streamlayer/react/lib`

- configure `.env` file
- start the example `pnpm dev`
- build the example `pnpm build`

- build result is in `docs` folder
