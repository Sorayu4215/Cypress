import { test, expect } from '@playwright/test';

const BASE_URL = process.env.URL

test.beforeEach(async({browser, page,context})=>{
  await page.goto('/')
})

test("Purchase flow",()=>{

})