# ATM Simulation in C++

This project simulates the basic functionality of an ATM machine using C++. It allows users to view their balance, withdraw money, and deposit money in an interactive console application.

## Features

- **View Balance**: Check your current account balance.
- **Withdraw Money**: Enter an amount to withdraw, with validation for sufficient funds.
- **Deposit Money**: Deposit money into your account, ensuring the amount is valid.
- **User-Friendly Menu**: Repeatedly perform operations until the user chooses to exit.

## Requirements

- A C++ compiler (e.g., GCC, Clang, or MSVC).
- Basic understanding of how to compile and run C++ code.

## Code Overview

The main components of the project include:

- **ATM Class**: Encapsulates the logic for managing the account balance, withdrawing, and depositing money.
  - `get_balance()`: Returns the current balance.
  - `withdraw(float amount)`: Attempts to withdraw the specified amount, returning success or failure.
  - `deposit(float amount)`: Adds the specified amount to the balance.

- **Main Function**: Provides a simple text-based menu for user interaction.

## Example Usage

1. Run the program.
2. Select from the menu options:
   - Enter `1` to view the balance.
   - Enter `2` to withdraw money.
   - Enter `3` to deposit money.
   - Enter `4` to exit.
3. Follow the prompts for withdrawal or deposit amounts.

### Sample Output

```
Welcome to PIN-ATM
1. View Balance
2. Withdraw Money
3. Deposit Money
4. Exit
Enter your choice: 1
Your balance is: $1000
```

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or feedback, feel free to reach out via email or open an issue on GitHub.

