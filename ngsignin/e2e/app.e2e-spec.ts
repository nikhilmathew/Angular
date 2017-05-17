import { NgsigninPage } from './app.po';

describe('ngsignin App', () => {
  let page: NgsigninPage;

  beforeEach(() => {
    page = new NgsigninPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
