import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import packageName from 'depcheck-package-name'
import { Builder, Nuxt } from 'nuxt'
import outputFiles from 'output-files'
import withLocalTmpDir from 'with-local-tmp-dir'

export default tester(
  {
    valid() {
      return withLocalTmpDir(async () => {
        await outputFiles({
          'assets/style.scss': endent`
            @import '@/../src/index.scss';

            .stretched-link {
              @include stretched-link;
            }

          `,
          'pages/index.vue': endent`
            <template>
              <div class="foo" :style="{ position: 'relative', padding: '10px' }">
                <a class="stretched-link" href="/">Link</a>
              </div>
            </template>

          `,
        })

        const nuxt = new Nuxt({
          css: ['~/assets/style.scss'],
          dev: true,
          modules: [packageName`nuxt-sourcemaps-abs-sourceroot`],
        })
        await new Builder(nuxt).build()
        try {
          await nuxt.listen()
          await this.page.goto('http://localhost:3000')

          const card = await this.page.waitForSelector('.foo')

          const rect = await card.boundingBox()
          await this.page.mouse.move(rect.x + 5, rect.y + 5)
          await this.page.waitForSelector('.foo a:hover')
          await this.page.mouse.move(rect.x + 10, rect.y + rect.height + 20)
          await this.page.waitForSelector('.foo a:hover', { hidden: true })
        } finally {
          await nuxt.close()
        }
      })
    },
  },
  [testerPluginPuppeteer()],
)
