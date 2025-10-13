import { Locator, Page } from '@playwright/test';


export class PackagesPage {
    private page: Page;
    private readonly freePckLoc: Locator;
    private readonly plusPckLoc: Locator;
    private readonly freeTitle: Locator;
    private readonly plusTitle: Locator;
    private readonly priceText: Locator;
    private readonly currency: Locator;
    private readonly mainTitle: Locator;

    private readonly freeBtn: Locator;
    private readonly plusBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.freePckLoc = page.locator("[data-test-id='FREE_TIER-component']");
        this.plusPckLoc = page.locator("[data-test-id='PLUS_TIER-component']");
        this.mainTitle = page.locator("h2").first();

        this.freeTitle = this.freePckLoc.locator("[data-test-id='tier-title']");
        this.plusTitle = this.plusPckLoc.locator("[data-test-id='tier-title']");

        this.freeBtn = this.freePckLoc.locator("[data-test-id='tier-cta-button']");
        this.plusBtn = this.plusPckLoc.locator("[data-test-id='tier-cta-button']");

        this.priceText = this.plusPckLoc.locator("[data-test-id='tier-price'] b");
        this.currency = this.plusPckLoc.locator("[data-test-id='tier-price'] i");
    }

    async getPlusTierPrice() {
        return await this.priceText.textContent();
    }

    async getPlusTierCurrency() {
        return await this.currency.textContent();
    }

    async getPlusTierTitle() {
        return await this.plusTitle.textContent();
    }

    async getFreeTierTitle() {
        return await this.freeTitle.textContent();
    }

    async getMainTitle() {
        return await this.mainTitle.textContent();
    }
}
