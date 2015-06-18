//Assuming the data retrieved has been seeded.
//Should also be looking at the page model
describe('As a customer I want to view my bill summary.', function() {
    it('should show bill summary', function() {
        var statmentPanel = element(by.css('.panel-statement'));
        browser.get('http://localhost:8282/');

        expect(element(by.css('.page-header')).getText()).toEqual('Your Bill');

        expect(statmentPanel.getText()).toContain('This is a summary of your charges, please see below for itemised billing.');

        expect(element(by.css('.list-group-item-period')).getText()).toContain('Period: 2015-01-26 - 2015-02-25');
        expect(element(by.css('.list-group-item-due')).getText()).toContain('Due: 2015-01-25');
        expect(element(by.css('.list-group-item-subscriptions')).getText()).toContain('Subscriptions: £71.40');
        expect(element(by.css('.list-group-item-calls')).getText()).toContain('Calls: £59.64');
        expect(element(by.css('.list-group-item-store')).getText()).toContain('Sky Store: £24.97');
        expect(element(by.css('.list-group-item-total')).getText()).toContain('Total: £136.03');
    });
});

describe('As a customer I want to view my itemised bill.', function() {
    it('should expand subscriptions list', function() {
        var subsPanel = element(by.xpath("//accordion//div[contains(@heading, 'Subscriptions')]//div[contains(@class, 'panel-collapse')]"));
        browser.get('http://localhost:8282/');
        expect(subsPanel.isDisplayed()).toBe(false);
        element(by.xpath("//accordion//div[contains(@heading, 'Subscriptions')]//a")).click();
        expect(subsPanel.isDisplayed()).toBe(true);
    });

    it('should expand calls list', function() {
        var callsPanel = element(by.xpath("//accordion//div[contains(@heading, 'Your Calls')]//div[contains(@class, 'panel-collapse')]"));
        browser.get('http://localhost:8282/');
        expect(callsPanel.isDisplayed()).toBe(false);
        element(by.xpath("//accordion//div[contains(@heading, 'Your Calls')]//a")).click();
        expect(callsPanel.isDisplayed()).toBe(true);
    });

    it('should expand sky store list', function() {
        var callsPanel = element(by.xpath("//accordion//div[contains(@heading, 'Sky Store')]//div[contains(@class, 'panel-collapse')]"));
        browser.get('http://localhost:8282/');
        expect(callsPanel.isDisplayed()).toBe(false);
        element(by.xpath("//accordion//div[contains(@heading, 'Sky Store')]//a")).click();
        expect(callsPanel.isDisplayed()).toBe(true);
    });
});
