import { NgDeploymentAppPage } from './app.po';

describe('ng-deployment-app App', () => {
  let page: NgDeploymentAppPage;

  beforeEach(() => {
    page = new NgDeploymentAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
