import { expect, test, type Page } from '@playwright/test'

const phoneViewports = [
  { name: '320px', width: 320, height: 800 },
  { name: '375px', width: 375, height: 812 },
  { name: '430px', width: 430, height: 932 },
]

const routes = [
  { path: '/', heading: 'Fall in love with Poland' },
  { path: '/destinations', heading: 'Destinations' },
  { path: '/attractions', heading: 'Attractions' },
  { path: '/food', heading: 'Polish food' },
  { path: '/impressum', heading: 'Impressum' },
  { path: '/missing-page', heading: 'That place is not on our map' },
]

async function expectNoHorizontalOverflow(page: Page) {
  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }))

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth)
}

for (const viewport of phoneViewports) {
  test.describe(`${viewport.name} mobile viewport`, () => {
    test.use({ viewport })

    for (const route of routes) {
      test(`${route.path} renders without page overflow`, async ({ page }) => {
        const consoleErrors: string[] = []
        page.on('console', (message) => {
          if (message.type() === 'error') {
            consoleErrors.push(message.text())
          }
        })

        await page.goto(route.path)

        await expect(
          page.getByRole('heading', { level: 1, name: route.heading }),
        ).toBeVisible()
        await expect(page.locator('footer')).toBeVisible()
        await expectNoHorizontalOverflow(page)
        expect(consoleErrors).toEqual([])
      })
    }

    test('header controls do not overlap', async ({ page }) => {
      await page.goto('/')

      const brand = await page
        .locator('header a[href="/"]')
        .first()
        .boundingBox()
      const navigation = await page
        .getByRole('navigation', { name: 'Main navigation' })
        .boundingBox()
      const themeToggle = page.locator('header button[aria-label*="theme"]')

      expect(brand).not.toBeNull()
      expect(navigation).not.toBeNull()
      expect(brand!.x + brand!.width).toBeLessThanOrEqual(navigation!.x)
      await expect(themeToggle).toBeVisible()
    })
  })
}

test.describe('mobile interactions', () => {
  test.use({ viewport: phoneViewports[0] })

  test('footer Impressum link opens the legal page', async ({ page }) => {
    await page.goto('/')
    await page.locator('footer').scrollIntoViewIfNeeded()
    await page.locator('footer a[href="/impressum"]').click()

    await expect(page).toHaveURL(/\/impressum$/)
    await expect(
      page.getByRole('heading', { level: 1, name: 'Impressum' }),
    ).toBeVisible()
  })

  test('theme toggle switches between light and dark themes', async ({
    page,
  }) => {
    await page.goto('/')

    const initialTheme = await page.locator('html').getAttribute('data-theme')
    const nextTheme = initialTheme === 'dark' ? 'light' : 'dark'

    await page.locator('header button[aria-label*="theme"]').click()

    await expect(page.locator('html')).toHaveAttribute('data-theme', nextTheme)
  })

  for (const path of ['/destinations', '/attractions', '/food']) {
    test(`${path} images load after scrolling`, async ({ page }) => {
      await page.goto(path)
      await page.locator('footer').scrollIntoViewIfNeeded()

      await expect
        .poll(() =>
          page.locator('main img').evaluateAll((images) =>
            images.every((image) => {
              const element = image as HTMLImageElement
              return element.complete && element.naturalWidth > 0
            }),
          ),
        )
        .toBe(true)
    })
  }
})
