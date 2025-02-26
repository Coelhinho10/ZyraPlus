# <h1 align="center">🍃 ZyraPlus</p>  

**ZyraPlus** is a utility library designed to make **Node.js** development easier and more efficient. With simple and optimized functions, it helps improve productivity and keep your code clean and organized.  

## 📦 Installation  

To install ZyraPlus, use the following command:  

```sh
npm install zyraplus
```

# 🚀 Features

ZyraPlus includes various utility functions to simplify your development. Here are some of the available functions:

- `abbreviate(number)`: Converts large numbers into a shorter format (e.g., `1000` → `"1k"`).
- `unabbreviate(number)`: Converts an abbreviated number back to its full form (e.g., `"1.5k"` → `1500`).
- `startCooldown(user, action, time)`: Starts a cooldown for a specific user and action combination, ensuring the user cannot repeat the action too quickly.
- `isCooldownActive(user, action)`: Checks if a cooldown is active for a user and action. Returns a boolean value (`true` or `false`).
- `getRemainingCooldownTime(user, action)`: Retrieves the remaining time (in milliseconds) for a user's cooldown on a specific action.
- `clearCooldown(user, action)`: Removes the cooldown for a particular user and action, allowing them to perform the action again.
- `clearAllCooldowns()`: Clears all active cooldowns in the system, useful for a complete reset.
