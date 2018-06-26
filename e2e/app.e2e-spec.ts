import { FulfillmenthubWebPage } from './app.po';

describe('fulfillmenthub-web App', function() {
  let page: FulfillmenthubWebPage;

  beforeEach(() => {
    page = new FulfillmenthubWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
