import Controller from '@ember/controller';

export default Controller.extend({
  policies: Ember.computed(function(){
    return this.get("store").findAll("policy");
  }),
  filteredPolicies: Ember.computed("policies.@each.id", "model.policies.@each.id", function(){
    let hash = {
      appPolicies: this.get("model").get("policies"),
      allPolicies: this.get("policies")
    };
    return Ember.RSVP.hash(hash).then(hash => {
      let ret = hash.allPolicies.filter(policy => {
        return !hash.appPolicies.includes(policy);
      });
      return ret;
    });
  }),

  actions: {
    save: function(){
      this.get("model").save().then(model => {
        this.transitionToRoute("frontendApplications");
      });
    },
    cancel: function(){
      this.get("model").reload()
        .then(model => {
          model.rollbackAttributes();
          return model.get("policies").reload();
        }).then(() => {
        this.transitionToRoute("frontendApplications");
      });
    },
    addPolicy: function(policy){
      this.get("model").get("policies").then(policies => {
        policies.pushObject(policy);
      });
    },
    removePolicy: function(policy){
      this.get("model").get("policies").then(policies => {
        policies.removeObject(policy);
      });
    }
  }
});
