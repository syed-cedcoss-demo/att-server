import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      require: true
    },
    username: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true,
      select: false
    },
    profile_pic: {
      type: String,
      default: 'https://fakeimg.pl/60x60/b56363/fff?text=SHM&font=museo'
    },
    role: {
      type: String,
      require: true,
      enum: {
        values: ['admin', 'agent', 'customer']
      }
    },
    is_active: {
      type: Boolean,
      default: false
    },
    otp: {
      type: Number,
      default: Math.floor(Math.random() * 10000),
      select: false
    }
  },
  { timestamps: true }
);

const userModel = model('user', userSchema);
export default userModel;
