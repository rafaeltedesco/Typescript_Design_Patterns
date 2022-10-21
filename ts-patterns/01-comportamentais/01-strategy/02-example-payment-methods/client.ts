import Account from "./domain/entities/account";
import DOC from "./domain/strategies/doc";
import PaymentSlip from "./domain/strategies/paymentSlip";
import TED from "./domain/strategies/ted";

const account1 = new Account(800);
const account2 = new Account(500);

// payment methods been used as Strategies

account1.setPaymentMethod(new TED());
account1.transfer(account2, 500);

process.stdout.write(`Account1 Balance: ${account1.balance}\n`);
process.stdout.write(`Account2 Balance: ${account2.balance}\n`);

account1.setPaymentMethod(new DOC());
account1.transfer(account2, 100);

process.stdout.write(`Account1 Balance: ${account1.balance}\n`);
process.stdout.write(`Account2 Balance: ${account2.balance}\n`);

account2.setPaymentMethod(new PaymentSlip());
account2.transfer(account1, 200);

process.stdout.write(`Account1 Balance: ${account1.balance}\n`);
process.stdout.write(`Account2 Balance: ${account2.balance}\n`);

account2.setPaymentMethod(new DOC());
account2.transfer(account1, 100);

process.stdout.write(`Account1 Balance: ${account1.balance}\n`);
process.stdout.write(`Account2 Balance: ${account2.balance}\n`);
