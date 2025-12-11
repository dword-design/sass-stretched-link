import { expect, test } from '@playwright/test';
import endent from 'endent';
import { execaCommand } from 'execa';
import getPort from 'get-port';
import nuxtDevReady from 'nuxt-dev-ready';
import outputFiles from 'output-files';
import kill from 'tree-kill-promise';

test('valid', async ({ page }, testInfo) => {
  const cwd = testInfo.outputPath();

  await outputFiles(cwd, {
    app: {
      'assets/style.scss': endent`
        @import './../../../../src/index.scss';

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
    },
    'nuxt.config.ts': endent`
      export default defineNuxtConfig({
        css: ['@/assets/style.scss'],
      });
    `,
  });

  const port = await getPort();

  const nuxt = execaCommand('nuxt dev', {
    cwd,
    env: { PORT: String(port) },
    reject: false,
  });

  try {
    await nuxtDevReady(port);
    await page.goto(`http://localhost:${port}`);
    const card = page.locator('.foo');
    await expect(card).toBeAttached();
    const rect = (await card.boundingBox())!;
    await page.mouse.move(rect.x + 5, rect.y + 5);
    await expect(page.locator('.foo a:hover')).toBeAttached();
    await page.mouse.move(rect.x + 10, rect.y + rect.height + 20);
    await expect(page.locator('.foo a:hover')).toBeHidden();
  } finally {
    await kill(nuxt.pid!);
  }
});
