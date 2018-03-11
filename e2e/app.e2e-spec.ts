import { Web3ClientPage } from './app.po';

describe('web3-client App', () => {
  let page: Web3ClientPage;

  beforeEach(() => {
    page = new Web3ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
