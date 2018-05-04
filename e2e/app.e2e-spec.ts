import { OnlineBankingPage } from './app.po';

describe('online-banking App', () => {
  let page: OnlineBankingPage;

  beforeEach(() => {
    page = new OnlineBankingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
