import mongoose from 'mongoose';
import timestamp from 'mongoose-timestamp';

const loanSchema = mongoose.Schema({
    amount: {
        type: String
    },
    purpose: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Membership'
    },
    status: {
        type: Boolean,
        default: false
    }
});

mongoose.plugin(timestamp)

const Loan = mongoose.model('Loan', loanSchema);

export default Loan;