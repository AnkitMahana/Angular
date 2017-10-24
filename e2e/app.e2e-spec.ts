import { MyDashboardPage } from './app.po';

describe('my-dashboard App', () => {
  let page: MyDashboardPage;

  beforeEach(() => {
    page = new MyDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
