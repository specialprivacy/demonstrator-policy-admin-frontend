import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    create: function(){
      this.transitionToRoute("frontendApplications.new");
    },
    edit: function(application){
      this.transitionToRoute("frontendApplications.edit", application);
    },
    delete: function(application){
      application.destroyRecord();
    }
  }
});
