#include <iostream>
#include <string>
using namespace std;

class ATM {
private:
    float balance;

public:
    ATM(float bal) : balance(bal) {}

    float get_balance() const {
        return balance;
    }

    bool withdraw(float amount) {
        if (amount <= 0) {
            cout << "Invalid withdrawal amount!" << endl;
            return false;
        }
        if (amount > balance) {
            cout << "Insufficient balance!" << endl;
            return false;
        }
        balance -= amount;
        return true;
    }

    void deposit(float amount) {
        if (amount <= 0) {
            cout << "Invalid deposit amount!" << endl;
            return;
        }
        balance += amount;
    }
};

int main() {
    ATM atm(1000);

    int choice;
    do {
        cout << "\nWelcome to PIN-ATM" << endl;
        cout << "1. View Balance" << endl;
        cout << "2. Withdraw Money" << endl;
        cout << "3. Deposit Money" << endl;
        cout << "4. Exit" << endl;
        
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
        case 1:
            cout << "Your balance is: $" << atm.get_balance() << endl;
            break;
        case 2: {
            float amount;
            cout << "Enter the amount you want to withdraw: ";
            cin >> amount;
            if (atm.withdraw(amount)) {
                cout << "Withdrawal successful!" << endl;
            }
            break;
        }
        case 3: {
            float amount;
            cout << "Enter the amount you want to deposit: ";
            cin >> amount;
            atm.deposit(amount);
            cout << "Deposit successful!" << endl;
            break;
        }
        case 4:
            cout << "Thank you for using the ATM. Goodbye!" << endl;
            break;
        default:
            cout << "Invalid choice! Please try again." << endl;
        }
    } while (choice != 4);

    return 0;
}
