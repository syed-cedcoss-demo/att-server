import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    profile_pic: {
      type: String,
      default: 'https://fakeimg.pl/60x60/b56363/fff?text=SHM&font=museo'
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ['agent', 'customer']
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
