// Generated from: tests\feature\VerifySubPackages.feature
import { test } from "playwright-bdd";

test.describe('Validate subscription packages titles and plus-tier price and currency', () => {

  test.describe('Verify subscription Packages for a country', () => {

    test('Example #1', async ({ Given, When, Then, page }) => { 
      await Given('the user navigates to the country landing page for "sa-ar"', null, { page }); 
      await When('the user inspects package titles and pricing info', null, { page }); 
      await Then('the page should show correct plus-tier price "15" and currency "ريال سعودي"', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, page }) => { 
      await Given('the user navigates to the country landing page for "kw-ar"', null, { page }); 
      await When('the user inspects package titles and pricing info', null, { page }); 
      await Then('the page should show correct plus-tier price "2.5" and currency "دينار كويتي"', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, page }) => { 
      await Given('the user navigates to the country landing page for "bh-ar"', null, { page }); 
      await When('the user inspects package titles and pricing info', null, { page }); 
      await Then('the page should show correct plus-tier price "3" and currency "دينار بحريني"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\feature\\VerifySubPackages.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the user navigates to the country landing page for \"sa-ar\"","stepMatchArguments":[{"group":{"start":51,"value":"\"sa-ar\"","children":[{"start":52,"value":"sa-ar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user inspects package titles and pricing info","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the page should show correct plus-tier price \"15\" and currency \"ريال سعودي\"","stepMatchArguments":[{"group":{"start":45,"value":"\"15\"","children":[{"start":46,"value":"15","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":63,"value":"\"ريال سعودي\"","children":[{"start":64,"value":"ريال سعودي","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the user navigates to the country landing page for \"kw-ar\"","stepMatchArguments":[{"group":{"start":51,"value":"\"kw-ar\"","children":[{"start":52,"value":"kw-ar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user inspects package titles and pricing info","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the page should show correct plus-tier price \"2.5\" and currency \"دينار كويتي\"","stepMatchArguments":[{"group":{"start":45,"value":"\"2.5\"","children":[{"start":46,"value":"2.5","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"دينار كويتي\"","children":[{"start":65,"value":"دينار كويتي","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the user navigates to the country landing page for \"bh-ar\"","stepMatchArguments":[{"group":{"start":51,"value":"\"bh-ar\"","children":[{"start":52,"value":"bh-ar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user inspects package titles and pricing info","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then the page should show correct plus-tier price \"3\" and currency \"دينار بحريني\"","stepMatchArguments":[{"group":{"start":45,"value":"\"3\"","children":[{"start":46,"value":"3","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"دينار بحريني\"","children":[{"start":63,"value":"دينار بحريني","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end