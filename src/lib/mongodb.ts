import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MONGODB_URI to .env.local');
}

export const connect = async () => {
  try {
    const opts = {
      bufferCommands: false,
    };

    await mongoose.connect(process.env.MONGODB_URI as string, opts);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};
