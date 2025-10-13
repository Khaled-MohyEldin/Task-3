import { test as base } from '@playwright/test'

import { PackagesPage } from '../POM/PackagesPage';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';


type Myfixtures = {
    pckgPage: PackagesPage;
}

export const test = base.extend<Myfixtures>({
    pckgPage: async ({ page }, use) => {
        await use(new PackagesPage(page))
    }
})


export function processJson() {
    dotenv.config({ path: path.resolve(".env") });
    let rawdata = fs.readFileSync(path.resolve("test-data", 'placeOrder.json'), 'utf-8');
    let testData = JSON.parse(rawdata);

    // Recursive function to inject env variables
    function injectEnv(value: any): any {
        if (typeof value === 'string') {
            return value.replace(/\$\{(\w+)\}/g, (_, key) => process.env[key] || '');
        } else if (Array.isArray(value)) {
            return value.map(injectEnv);
        } else if (typeof value === 'object' && value !== null) {
            const result: any = {};
            for (const [k, v] of Object.entries(value)) {
                result[k] = injectEnv(v);
            }
            return result;
        }
        return value;
    }

    return injectEnv(testData);
}

export function getLocal() {
    dotenv.config();
    const locale = process.env.language || 'EN';
    const testData = require(`../test-data/Localization_${locale}.json`);
    return testData; 
}
