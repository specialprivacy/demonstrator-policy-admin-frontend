import Controller from '@ember/controller';

export default Controller.extend({
  collections: Ember.inject.service(),
  dataCollections: Ember.computed.alias("collections.dataCollections"),
  storageCollections: Ember.computed.alias("collections.storageCollections"),
  processingCollections: Ember.computed.alias("collections.processingCollections"),
  purposeCollections: Ember.computed.alias("collections.purposeCollections"),
  recipientCollections: Ember.computed.alias("collections.recipientCollections"),
  selectedDataCollection: Ember.computed("model.dataCollection", function(){
    return this.get("dataCollections").filter(collection => {return collection.value === this.model.get("dataCollection")})[0];
  }),
  selectedStorageCollection: Ember.computed("model.storageCollection", function(){
    return this.get("storageCollections").filter(collection => {return collection.value === this.model.get("storageCollection")})[0];
  }),
  selectedProcessingCollection: Ember.computed("model.processingCollection", function(){
    return this.get("processingCollections").filter(collection => {return collection.value === this.model.get("processingCollection")})[0];
  }),
  selectedPurposeCollection: Ember.computed("model.purposeCollection", function(){
    return this.get("purposeCollections").filter(collection => {return collection.value === this.model.get("purposeCollection")})[0];
  }),
  selectedRecipientCollection: Ember.computed("model.recipientCollection", function(){
    return this.get("recipientCollections").filter(collection => {return collection.value === this.model.get("recipientCollection")})[0];
  }),

  actions: {
    set: function(attribute, value){
      this.get("model").set(attribute, value.value);
    },
    save: function () {
      this.get("model").save().then(model => {
        this.transitionToRoute("policies");
      });
    },
    cancel: function () {
      this.get("model").reload()
        .then(model => {
          return model.rollbackAttributes();
        }).then(() => {
          this.transitionToRoute("policies");
      });
    }
  }
});
