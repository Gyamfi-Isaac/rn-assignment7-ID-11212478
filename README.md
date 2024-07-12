## Overview
This React Native project is a shopping app with two primary screens: HomeScreen for browsing available products and CartScreen for cart management. It employs the useContext hook for state management and AsyncStorage for local data persistence.

## Design Choices
* Context API: Utilized for managing cart state across various components, facilitating the addition and removal of items from the cart without needing to pass props through multiple levels.
* AsyncStorage Selected for local data storage to ensure cart items persist even when the app is closed or restarted.
* FlatList: Used for efficient rendering of product and cart item lists, ensuring smooth performance even with a large number of items.
* Modular Components: The codebase is organized with separate components for ProductCard and context management, enhancing maintainability and clarity.

## Implementation
* Cart Context: A CartContext is implemented to provide methods for adding and removing items from the cart, with cart state persistence handled by AsyncStorage.
  HomeScreen: Displays a list of products, each with an "Add to Cart" button.
* CartScreen: Shows the items in the cart, each with a "Remove from Cart" button.
* Data Storage: Uses AsyncStorage to save and load cart items, ensuring the cart state is preserved across app sessions.

Screenshot


![WhatsApp Image 2024-07-12 at 16 32 31_c2adadff](https://github.com/user-attachments/assets/a4c95adf-d12d-40d9-9cf0-44bbe7bcc63c)


![WhatsApp Image 2024-07-12 at 16 32 34_ea262867](https://github.com/user-attachments/assets/9e336e4c-9d35-41b9-9418-6825c9caf187)


![WhatsApp Image 2024-07-12 at 16 32 34_27d58610](https://github.com/user-attachments/assets/6c008fbd-4abf-49f7-8cb5-28c8b42f9ac0)


![WhatsApp Image 2024-07-12 at 16 32 35_0df6af11](https://github.com/user-attachments/assets/49a1b415-a8a7-4ab1-af36-2060ba8721b8)


![WhatsApp Image 2024-07-12 at 16 32 35_85a692b4](https://github.com/user-attachments/assets/705d9dfb-5d4f-45a5-8749-a8822fe337e2)





