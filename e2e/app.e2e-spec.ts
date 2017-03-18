import { Ng2componentsPage } from './app.po';

describe('ng2components App', () => {
  let page: Ng2componentsPage;

  beforeEach(() => {
    page = new Ng2componentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
