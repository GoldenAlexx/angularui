import { AngularUIPage } from './app.po';

describe('angular-ui App', function() {
  let page: AngularUIPage;

  beforeEach(() => {
    page = new AngularUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
