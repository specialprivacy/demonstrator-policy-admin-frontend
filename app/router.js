import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("policies", function() {
    this.route("new");
    this.route("edit", {"path": "/:id/edit"});
  });
  this.route("frontendApplications", {path: "applications"}, function() {
    this.route("new");
    this.route("edit", {"path": "/:id/edit"});
  });
});

export default Router;
