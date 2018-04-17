import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  payloadKeyFromModelName(modelName) {
    if(modelName === "frontend-application"){
      return "application";
    }
    else return this._super(...arguments);
  },
  modelNameFromPayloadKey(payloadKey) {
    if (payloadKey === "applications") {
      return this._super(payloadKey.replace("applications", "frontendApplications"));
    } else if (payloadKey === "application") {
      return this._super(payloadKey.replace("application", "frontendApplication"));
    } else {
      return this._super(payloadKey);
    }
  }
});
