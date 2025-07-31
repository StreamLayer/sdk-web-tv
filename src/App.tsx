
import { StreamLayerProvider, StreamLayerSDKTv } from '@streamlayer/web-os'

import { anonymous } from '@streamlayer/sdk-web-anonymous-auth'
import { cx } from '@emotion/css'

import '@streamlayer/web-os/style.css'
import { EVENT_ID, SDK_KEY, PRODUCTION } from './config'

const plugins = new Set([anonymous])

function App() {
  return (
    <div className={cx('app-container')}>
      <StreamLayerProvider
        themeMode={'light'}
        plugins={plugins as any}
        autoEnable
        withAd
        sdkKey={SDK_KEY}
        production={PRODUCTION}
        event={EVENT_ID}
      >
        <StreamLayerSDKTv persistent>
          <video
            src="https://storage.googleapis.com/cdn.streamlayer.io/assets/sdk-web/Own%20The%20Game%201080p%20RF18.mp4"
            style={{ width: '100%', height: '100%', borderRadius: 10 }}
            autoPlay
            loop
            playsInline
            controls
          />
        </StreamLayerSDKTv>
      </StreamLayerProvider>
    </div>
  )
}

export default App
