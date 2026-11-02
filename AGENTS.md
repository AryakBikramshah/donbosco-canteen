
AGENTS.md — Don Bosco Canteen Web Application

# 1. Project Overview

Build a modern, responsive frontend web application for the Don Bosco School Canteen.

This application is designed specifically for one school.

Parents will log in using their registered canteen card number and password, access the school canteen dashboard, browse food menus and nested categories, order food for their children, top up their registered canteen cards through Khalti, and view their order and top-up history.

### Current Development Scope

- Frontend: Next.js, JavaScript, Tailwind CSS and shadcn/ui.
- Menu and Categories: Existing Oracle RESTful Services (ORDS) APIs.
- User Accounts: Existing users are already registered in Oracle using their canteen card numbers.
- Login Testing: Fictional card numbers and passwords for frontend testing.
- Authentication API: To be integrated later.
- Orders: Frontend mock implementation for now.
- Top-ups: Simulated Khalti checkout for now.
- Order History: Mock data for now.
- Top-Up History: Mock data for now.

**Important:** Menu and Categories must come from the existing Oracle APIs. Do not replace them with mock data.

**Important:** User accounts already exist in Oracle. Do not create a new registration system or assume parents need to register themselves.

The current project is frontend-only, but its architecture should support future Oracle authentication and real payment integration.

## 2. Coding Agent Instructions

My goal is to learn how to build this application myself.

Follow these instructions:

1. Inspect the existing project before changing anything.
2. Next.js is already installed. Do not recreate the project.
3. Use JavaScript rather than TypeScript for all new application code.
4. Inspect the existing Next.js configuration and determine whether it currently uses TypeScript.
5. If TypeScript is configured, explain the steps needed to convert the existing project to JavaScript before making configuration changes.
6. Preserve working code and dependencies.
7. Do not automatically convert every existing file without explaining the changes.
8. Build the application in small, manageable phases.
9. Explain the purpose of each feature before implementing it.
10. Explain which files will be created or modified.
11. Teach me React, JavaScript, Next.js, API integration, state management and Tailwind CSS as we develop.
12. Prefer guiding me through implementation instead of generating the entire application automatically.
13. Do not introduce unnecessary libraries.
14. Do not create a backend or database in this phase.
15. Do not recreate existing Oracle APIs.
16. Never invent API endpoints, response fields, request parameters or authentication methods.
17. Clearly distinguish actual Oracle API functionality from simulated frontend functionality.
18. Maintain a development checklist.
19. Test each feature before moving to the next phase.
20. Start by inspecting the project. Do not implement everything immediately.

## 3. Technology Stack

Use:

- Next.js with the existing App Router configuration if present.
- JavaScript (ES6+).
- React.
- Tailwind CSS.
- shadcn/ui as the preferred UI component library.
- Lucide React for icons if available.
- Fetch API for Oracle REST API requests.
- React hooks and Context API for frontend state when appropriate.

### JavaScript Requirements

- Use `.js` and `.jsx` for new JavaScript files.
- Do not write new `.ts` or `.tsx` files.
- Do not introduce TypeScript interfaces or types.
- Use clear variable and function names.
- Use JSDoc comments where helpful.
- Use sensible validation and defensive programming.
- Keep the code modular and reusable.

### Existing TypeScript Configuration

If the current Next.js project was created using TypeScript:

- Inspect `tsconfig.json`.
- Inspect `next-env.d.ts`.
- Inspect existing `.ts` and `.tsx` files.
- Explain the conversion process.
- Update the necessary configuration safely.
- Do not delete important configuration files blindly.
- Ensure the application builds successfully after conversion.

Do not reinstall Next.js unnecessarily.

### shadcn/ui

Use shadcn/ui for:

- Buttons.
- Cards.
- Dialogs.
- Inputs.
- Dropdowns.
- Tables.
- Tabs.
- Badges.
- Toast notifications.
- Sheet or drawer components.

Inspect whether shadcn/ui is already configured before adding it.

Do not mix Material UI and shadcn/ui unnecessarily.

## 4. Oracle RESTful Services Integration

Oracle RESTful Services already contains the APIs for menu and categories.

The frontend must consume these existing APIs.

### API Inspection

Before implementation, request or inspect:

1. Oracle ORDS base URL.
2. Main category endpoint.
3. Subcategory endpoint or category relationship.
4. Menu or food items endpoint.
5. Sample JSON responses.
6. Required query parameters.
7. Required authentication headers, if applicable.

Never guess the endpoint structure.

### API Architecture

Keep API requests separate from UI components.

Suggested structure:

- `src/lib/api/client.js`
- `src/lib/api/categories.js`
- `src/lib/api/menu.js`
- `src/data/`
- `src/components/menu/`

Create reusable functions based on the actual API contracts, such as:

- `getCategories()`
- `getSubcategories(categoryId)`
- `getMenuItems(categoryId)`
- `getMenuItem(itemId)`

These are suggested frontend function names, not assumed Oracle endpoint names.

Use the actual Oracle endpoints and response structures.

### API Requirements

- Use Fetch API unless an existing API client is available.
- Handle loading states.
- Handle API errors.
- Handle empty responses.
- Validate HTTP response status.
- Parse JSON correctly.
- Map Oracle response fields to frontend models when necessary.
- Avoid unnecessary repeated requests.
- Use actual category and item identifiers.
- Support pagination or filtering if the APIs provide it.

Never silently replace a failed Oracle request with mock menu data.

### Environment Variables

Use a configurable Oracle API base URL.

Example:

`NEXT_PUBLIC_ORACLE_API_BASE_URL=...`

Only expose values that are safe for the browser.

Never expose Oracle credentials, private API keys or confidential authentication tokens through `NEXT_PUBLIC_` variables.

If an API requires confidential credentials, explain the need for a secure server-side approach before implementation.

## 5. Parent Login and Existing Oracle Users

This is an important part of the application.

**Parent accounts already exist in Oracle.**

Users are associated with registered canteen card numbers.

The application must not create a new parent registration system.

### Intended Login Experience

Create a dedicated login page with:

- Don Bosco Canteen branding.
- Canteen card number input.
- Password input.
- Show/hide password button.
- Input validation.
- Login button.
- Loading state.
- Error messages.
- Responsive layout.

### Frontend Testing Login

For the current frontend development phase, use fictional card numbers and passwords.

Example development-only credentials:

- Card Number: `DB100001`
- Password: `test1234`

These are fictional test credentials and must not be treated as real Oracle users.

The mock login should:

1. Accept the predefined test card number.
2. Validate the password.
3. Display an error for invalid credentials.
4. Display a loading state.
5. Simulate successful login.
6. Navigate to the parent dashboard.
7. Display mock student and card information.

Keep the mock authentication logic separate from the login UI.

For example:

`src/lib/auth/mockAuth.js`

Do not hardcode authentication logic directly inside the login component.

### Future Oracle Authentication Integration

Later, replace mock authentication with the existing Oracle authentication mechanism or an approved authentication API.

Before implementing it, inspect:

- Existing Oracle user records and login API.
- How card numbers identify users.
- How passwords are verified.
- Whether passwords are hashed.
- The actual login request and response.
- Session or token handling.
- How student information is retrieved after login.

Do not assume that the frontend can safely verify Oracle passwords directly.

Never retrieve password hashes into browser code.

Never store raw passwords in localStorage.

Never claim that the mock login authenticates a real Oracle account.

## 6. Application Layout

After login, show the parent dashboard.

Include:

- Don Bosco Canteen branding.
- Sidebar navigation.
- Header.
- Student information.
- Registered card identifier.
- Current card balance.
- Main content area.
- Logout action.
- Responsive mobile navigation.

### Navigation

1. Dashboard
2. Menu
3. Top Up
4. Order History
5. Top-Up History

Use Next.js routing.

Highlight the active navigation item.

## 7. Parent Dashboard

Display:

- Welcome message.
- Student information.
- Registered card number, masked where appropriate.
- Available balance.
- Browse Menu shortcut.
- Top-Up shortcut.
- Recent orders.
- Recent top-up activity.

Use shared frontend state for mock student information, balance and history.

## 8. Menu and Categories

The menu and category information must come from Oracle ORDS APIs.

### Expected Navigation

Menu → Main Category → Subcategory → Food Items.

Example:

- Food
  - Snacks
    - Samosa
    - Veg Momo
    - Sandwich
  - Meals
    - Fried Rice
    - Chowmein
- Drinks
  - Cold Drinks
  - Juice
  - Water
- Bakery
  - Cakes
  - Pastries

These are examples only. Actual menu information must come from Oracle.

### Required Behavior

1. Fetch main categories from Oracle.
2. Display main categories.
3. Fetch or display corresponding subcategories.
4. Fetch food items for the selected subcategory.
5. Display selected category and subcategory.
6. Implement breadcrumb or back navigation.
7. Display item name, description, price and availability.
8. Show food images where available.
9. Provide Add to Cart buttons.
10. Handle loading, error and empty states.

Do not hardcode categories or food items in UI components.

Use the actual Oracle category IDs and relationships.

The category hierarchy must follow the real API data structure.

## 9. Cart and Ordering

Parents should be able to select food items and place an order for their children.

### Cart

- Add items.
- Increase and decrease quantities.
- Remove items.
- Calculate subtotals.
- Calculate total amount.
- Show total item count.
- Display cart drawer or panel.
- Review items before submitting.
- Display current mock wallet balance.
- Prevent orders when balance is insufficient.

Use food item prices from the Oracle menu API.

### Simulated Ordering

For now:

1. Validate the cart.
2. Check item availability using the fetched data.
3. Calculate total amount.
4. Check mock wallet balance.
5. Generate a mock order reference.
6. Update mock wallet balance.
7. Add the order to mock history.
8. Display order confirmation.
9. Clear the cart.

Do not send real orders to Oracle unless an order API is explicitly provided and approved for use.

## 10. Top-Up and Khalti

Create a dedicated Top-Up page.

Display:

- Current balance.
- Registered card number.
- Amount input.
- Suggested amounts: NPR 100, 250, 500 and 1,000.
- Validation.
- Payment summary.
- Khalti payment action.

### Frontend Khalti Simulation

1. Parent enters a top-up amount.
2. Parent reviews the amount.
3. Parent clicks the Khalti payment action.
4. Show a simulated checkout dialog.
5. Allow success, failure and cancellation.
6. On success, create a mock top-up transaction.
7. Update the mock balance.
8. Update top-up history.
9. Display a transaction reference.

Do not integrate the actual Khalti SDK in this phase.

Do not pretend a simulated payment is a real payment.

Future integration must use official Khalti APIs through a trusted backend for payment initiation and verification.

## 11. Order History

Create a dedicated page displaying:

- Order reference.
- Date and time.
- Food items.
- Quantities.
- Total amount.
- Order status.

Include status badges, filters, sorting, order details and empty states.

Use mock order data.

## 12. Top-Up History

Create a dedicated page displaying:

- Transaction reference.
- Date and time.
- Amount.
- Payment method.
- Payment status.
- Registered card identifier.

Use mock records.

Only successful simulated payments should increase the wallet balance.

## 13. Frontend Data and State

Keep real Oracle menu data separate from mock frontend data.

Suggested structure:

### Oracle data

- Categories.
- Subcategories.
- Food items.

### Mock frontend data

- Test parent account.
- Student information.
- Card balance.
- Orders.
- Top-up history.

Use React state initially.

Use React Context when data needs to be shared across multiple routes.

Keep the following consistent:

- Selected student.
- Card balance.
- Cart.
- Order history.
- Top-up history.

If persistence is needed, use a carefully designed mock persistence layer.

Do not store passwords or sensitive information in browser storage.

## 14. Suggested Project Structure

Adapt this structure to the existing project.

- `src/app/`
  - login
  - dashboard
  - menu
  - top-up
  - order-history
  - top-up-history

- `src/components/layout/`
  - Sidebar
  - Header
  - MobileNavigation

- `src/components/menu/`
  - CategoryNavigation
  - SubcategoryNavigation
  - FoodItemCard
  - CartDrawer

- `src/components/wallet/`
  - BalanceCard
  - TopUpForm
  - MockKhaltiCheckout

- `src/components/history/`
  - OrderHistory
  - TopUpHistory

- `src/lib/api/`
  - client.js
  - categories.js
  - menu.js

- `src/lib/auth/`
  - mockAuth.js

- `src/data/`
  - mockStudent.js
  - mockWallet.js
  - mockOrders.js
  - mockTopUps.js

- `src/context/`
  - AppContext.jsx, if needed.

- `src/lib/`
  - currency.js
  - utils.js

- `src/types/` is not required for this JavaScript project.

Do not create unnecessary files.

## 15. Visual Design

Build a polished, professional school canteen interface.

- Modern and minimal design.
- Consistent spacing and typography.
- Responsive desktop, tablet and mobile layouts.
- shadcn/ui components.
- Attractive food cards.
- Clear category navigation.
- Consistent NPR formatting.
- Accessible forms and buttons.
- Loading, empty, success and error states.
- Replaceable school logo placeholder.

Prioritize mobile usability.

## 16. Development Phases

### Phase 1 — Inspect Existing Project

- Inspect Next.js setup.
- Check whether the project currently uses TypeScript.
- Explain how to safely use JavaScript.
- Inspect Tailwind CSS.
- Inspect shadcn/ui.
- Review the folder structure.
- Ask for Oracle ORDS endpoint details and sample responses.

Do not modify files before inspection.

### Phase 2 — JavaScript Setup and API Integration

- Configure JavaScript if necessary.
- Preserve the existing Next.js setup.
- Understand Oracle API contracts.
- Create reusable API functions.
- Fetch main categories.
- Fetch subcategories.
- Fetch food items.
- Test actual responses.

### Phase 3 — Login and Layout

- Build the login page.
- Implement fictional card number and password login.
- Build dashboard layout.
- Add responsive navigation.
- Implement logout.

### Phase 4 — Dashboard

- Add mock student data.
- Add mock wallet balance.
- Display recent activity.

### Phase 5 — Menu

- Connect menu components to Oracle.
- Display categories and subcategories.
- Display food items.
- Implement breadcrumb navigation.
- Add responsive item cards.

### Phase 6 — Cart and Ordering

- Implement cart state.
- Add quantity controls.
- Calculate totals.
- Validate mock wallet balance.
- Simulate ordering.
- Update mock history.

### Phase 7 — Top-Up

- Build top-up interface.
- Implement amount validation.
- Create simulated Khalti checkout.
- Update balance after simulated success.
- Update top-up history.

### Phase 8 — History

- Build order history.
- Build top-up history.
- Add filters and sorting.

### Phase 9 — Testing and Polish

- Test login.
- Test Oracle API integration.
- Test category navigation.
- Test cart calculations.
- Test insufficient balance.
- Test payment success and failure.
- Test history updates.
- Check mobile responsiveness.
- Resolve build errors.

## 17. Acceptance Criteria

The frontend prototype is complete when:

- A parent can log in with fictional test card credentials.
- The parent reaches the dashboard.
- Categories are fetched from Oracle ORDS.
- Subcategories are displayed correctly.
- Food items are fetched from Oracle.
- The parent can browse the menu.
- The parent can add items to the cart.
- Cart calculations work correctly.
- Insufficient balance prevents simulated ordering.
- Successful simulated orders update the mock balance and history.
- The parent can simulate Khalti payment.
- Failed or cancelled payments do not increase the balance.
- Top-up history displays correctly.
- Navigation works.
- The application is responsive.
- The project uses JavaScript for new application code.
- No relevant build errors remain.

## 18. First Instruction

Start with Phase 1.

Inspect my existing Next.js project.

Explain:

1. Whether it currently uses JavaScript or TypeScript.
2. What changes are necessary to use JavaScript.
3. Whether Tailwind CSS is configured.
4. Whether shadcn/ui is configured.
5. What the existing folder structure looks like.
6. How Oracle ORDS APIs will connect to the frontend.

Then ask me for the Oracle API base URL, endpoint details and sample JSON responses if they are not already available.

Do not implement everything at once.

Teach me step by step.

**Remember: Oracle already contains the registered users, menu and category data. We will use fictional login credentials for frontend testing, real Oracle APIs for menu and categories, and simulated ordering and Khalti payment for now.**
