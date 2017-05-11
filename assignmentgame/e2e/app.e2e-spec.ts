import { AssignmentgamePage } from './app.po';

describe('assignmentgame App', () => {
  let page: AssignmentgamePage;

  beforeEach(() => {
    page = new AssignmentgamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
