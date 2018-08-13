import Controller from '@ember/controller';

export default Controller.extend({
  collections: Ember.inject.service(),
  dataCollections: Ember.computed.alias("collections.dataCollections"),
  storageCollections: Ember.computed.alias("collections.storageCollections"),
  processingCollections: Ember.computed.alias("collections.processingCollections"),
  purposeCollections: Ember.computed.alias("collections.purposeCollections"),
  recipientCollections: Ember.computed.alias("collections.recipientCollections"),

  actions: {
    create: function(){
      this.transitionToRoute("policies.new");
    },
    edit: function(policy){
      this.transitionToRoute("policies.edit", policy);
    },
    delete: function(policy){
      policy.destroyRecord();
    }
  }
});
