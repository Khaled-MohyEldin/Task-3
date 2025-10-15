import { test, expect } from '@playwright/test';
import { PackagesPage } from '../POM/PackagesPage.ts'
import basicData from '../test-data/basicData.json';
import testData from '../test-data/testData.json';

/*
Validate the Subscription Packages – Type & Price and Currency 
for all Countries (SA / Kuwait and Bahrain)
=====================
    using Playwright Feature TestSteps to mimic BDD Style and it's showing in report Pics PR-Report-2.png
    using Data to cover all countries with one test 
    Also all test data is outside in json files 
    Used Page Object Model for future readability and scaling 
    ============================
    I've set the testIdAttribute in the playwright.config.ts file to 'data-test-id'
*/


for (const dataSet of testData) {

    test(`Scenario: Verify subscription Packages for ${dataSet.Country}`, async ({ page }) => {

        const pckgPage = new PackagesPage(page);
        let mainTitle: string | undefined;
        let freeTitle: string | undefined;
        let plusTitle: string | undefined;
        let plusPrice: string | undefined;
        let plusCurrency: string | undefined;

        await test.step('Given the user navigates to the country landing page', async () => {
            await page.goto(`${basicData.baseURL}/${dataSet.Country}`, { waitUntil: 'domcontentloaded' });
        });

        await test.step('When the user inspects package titles and pricing info', async () => {
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
        })

        await test.step('Then the page should show correct titles and plus-tier pricing/currency', async () => {
            //Validating Titles
            expect(mainTitle).toBe(basicData.mainTilte); // اختر باقتك
            expect(freeTitle).toBe(basicData.freeTitle); // بيسك
            expect(plusTitle).toBe(basicData.plusTitle); // بريميوم
            //We could also check for each button text 

            expect(plusPrice).toBe(dataSet.price);
            expect(plusCurrency).toContain(dataSet.currency);
        });

    });

}

