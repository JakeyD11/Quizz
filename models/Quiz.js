import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,

    },
    difficulty: {
        type: String, // tells mongoose this value will be of this type, string
        enum: ['easy', 'medium', 'hard'], //difficulty of test questions array
        required: true
    },
    category: {
        type: String,
        required: true
    },
    summary: {
        type: String,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        required: true,
    }
});

export default mongoose.models.Quiz ||
    mongoose.model('Quiz', quizSchema);