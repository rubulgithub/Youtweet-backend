import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is subscribing(let say it as "User")
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //one to whom "subscriber" is subscribing(let  say it as "channel")
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
