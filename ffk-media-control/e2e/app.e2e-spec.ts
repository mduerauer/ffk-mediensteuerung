import { FfkMediaControlPage } from './app.po';

describe('ffk-media-control App', function() {
  let page: FfkMediaControlPage;

  beforeEach(() => {
    page = new FfkMediaControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
