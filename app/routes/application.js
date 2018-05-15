import Route from '@ember/routing/route';
import DS from 'ember-data';

const { UnauthorizedError } = DS;

export default Route.extend({
  // actions: {
  //   error(error, transition) {
  //     if (error instanceof UnauthorizedError) {
  //       // go to the sign in route
  //       debugger
  //       return window.location.replace(headers.location);
  //     }
  //
  //     // ...other error handling logic
  //   }
  // }
});
