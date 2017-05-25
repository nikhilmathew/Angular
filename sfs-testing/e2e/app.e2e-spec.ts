import { SfsTestingPage } from './app.po';

describe('sfs-testing App', () => {
  let page: SfsTestingPage;

  beforeEach(() => {
    page = new SfsTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
