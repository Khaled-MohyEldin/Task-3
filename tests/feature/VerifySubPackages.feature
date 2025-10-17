Feature: Validate subscription packages titles and plus-tier price and currency

  In order to ensure subscribers see correct package information
  As a QA engineer
  I want to validate the package titles and the plus-tier price and currency for each supported country

  Scenario Outline: Verify subscription Packages for a country
    Given the user navigates to the country landing page for "<Country>"
    When the user inspects package titles and pricing info
    Then the page should show correct plus-tier price "<price>" and currency "<currency>"

    Examples:
      | Country | price | currency         |
      | sa-ar   | 15    | ريال سعودي       |
      | kw-ar   | 2.5   | دينار كويتي      |
      | bh-ar   | 3     | دينار بحريني     |
