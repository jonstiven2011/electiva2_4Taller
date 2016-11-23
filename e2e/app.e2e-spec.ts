import { Electiva24TallerPage } from './app.po';

describe('electiva2-4-taller App', function() {
  let page: Electiva24TallerPage;

  beforeEach(() => {
    page = new Electiva24TallerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
