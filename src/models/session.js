import { Schema, model } from 'mongoose';

const sessionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      reqiuired: true,
    },
    accessToken: {
      type: String,
      reqiuired: true,
    },
    refreshToken: {
      type: String,
      reqiuired: true,
    },
    accessTokenValidUntil: {
      type: Date,
      reqiuired: true,
    },
    refreshTokenValidUntil: {
      type: Date,
      reqiuired: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Session = model('Session', sessionSchema);
