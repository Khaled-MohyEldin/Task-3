import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { PackagesPage } from '../../POM/PackagesPage';
import basicData from '../../test-data/basicData.json';

const { Given, When, Then } = createBdd();

let pckgPage: PackagesPage;
let mainTitle: string | undefined;
let freeTitle: string | undefined;
let plusTitle: string | undefined;
let plusPrice: string | undefined;
let plusCurrency: string | undefined;

Given('the user navigates to the country landing page for {string}', async ({ page }, country: string) => {
  pckgPage = new PackagesPage(page as any);
  await page.goto(`${basicData.baseURL}/${country}`, { waitUntil: 'domcontentloaded' });
});

When('the user inspects package titles and pricing info', async ({ page }) => {
  mainTitle = (await pckgPage.getMainTitle())?.trim();
  freeTitle = (await pckgPage.getFreeTierTitle())?.trim();
  plusTitle = (await pckgPage.getPlusTierTitle())?.trim();
  plusPrice = (await pckgPage.getPlusTierPrice())?.trim();
  plusCurrency = (await pckgPage.getPlusTierCurrency())?.trim();

  //sanity checks 
  expect(plusPrice).toBeTruthy();
  expect(plusCurrency).toBeTruthy();
  //to check it's numeric
  expect(plusPrice).toMatch(/\d+/);
  console.log("Steps files Here ***********")
});

Then('the page should show correct plus-tier price {string} and currency {string}', async ({ page }, price: string, currency: string) => {
  //Validating Titles
  expect(mainTitle).toBe(basicData.mainTilte);
  expect(freeTitle).toBe(basicData.freeTitle);
  expect(plusTitle).toBe(basicData.plusTitle);

  expect(plusPrice).toBe(price);
  expect(plusCurrency).toContain(currency);
});
