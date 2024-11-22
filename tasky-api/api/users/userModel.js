import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Regex to validate password (at least 8 characters, 1 letter, 1 number, and 1 special character)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return passwordRegex.test(value); // Validate against regex
      },
      message: (props) =>
        `Password "${props.value}" is not strong enough. It must be at least 8 characters long and include at least one letter, one number, and one special character.`,
    },
  },
});

export default mongoose.model('User', UserSchema);
