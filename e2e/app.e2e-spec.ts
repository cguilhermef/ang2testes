import { AngTwoPage } from './app.po';

describe('ang-two App', function() {
  let page: AngTwoPage;

  beforeEach(() => {
    page = new AngTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
