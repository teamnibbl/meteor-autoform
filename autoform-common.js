import SimpleSchema from 'simpl-schema';
import { Match } from 'meteor/check';

// This is the only file that is run on the server, too

// Extend the schema options allowed by SimpleSchema
SimpleSchema.extendOptions({
  autoform: Match.Optional(Object)
});
