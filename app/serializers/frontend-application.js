import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  payloadKeyFromModelName(modelName) {
    return "application";
  },
  modelNameFromPayloadKey(payloadKey) {
    return this._super(payloadKey.replace("application", "frontendApplication"));
  }
});
