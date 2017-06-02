import { GametestPage } from './app.po';

describe('gametest App', () => {
  let page: GametestPage;

  beforeEach(() => {
    page = new GametestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
