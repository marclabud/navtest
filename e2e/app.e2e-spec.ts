import { NavtestPage } from './app.po';

describe('navtest App', () => {
  let page: NavtestPage;

  beforeEach(() => {
    page = new NavtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
