import { StudyPage } from './app.po';

describe('study App', () => {
  let page: StudyPage;

  beforeEach(() => {
    page = new StudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
