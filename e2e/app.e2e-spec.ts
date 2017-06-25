import { PizzaRepublicPage } from './app.po';

describe('pizza-republic App', () => {
  let page: PizzaRepublicPage;

  beforeEach(() => {
    page = new PizzaRepublicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
