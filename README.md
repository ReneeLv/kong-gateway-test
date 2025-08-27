# 🚀 Cypress E2E Test Implementation Process & Strategy

This project provides automated tests for Kong Gateway UI (Kong Manager) using Cypress and TypeScript.

## Prerequisites

- Node.js 18+
- Docker Desktop 4.12+
- Git

## 📋 Implementation Steps

1.  **Add Page Object Model**
    *   Encapsulate functions into pages (e.g., `create-service.page.js`, `create-route.page.js`).

2.  **Create Test Cases**
    *   Place test files in the `e2e` directory.
    *   Utilize the functions from the Page Objects.

3.  **Element Selection**
    *   Encapusolation `create-route` and `create-service` action in `path` directory. 
    
    *   Use **Cypress Studio** and **Browser DevTools** to identify and capture UI elements.

4.  **Assertion Strategy**
    *   Specifically assert the different behaviors of the `empty-state-action` button and the `toolbar-add` button.

5.  **Manage Test Dependencies**
    *   Ensure `service-creation` runs before `route-creation` tests to guarantee a `service-id` exists.

6.  **Debugging**
    *   Use `npm run cypress:open` to launch the Cypress UI for visual test debugging and execution.

7.  **Reporting & CI**
    *   Integrate a reporter to auto-generate detailed test reports.
    *   Use `npm run cypress:run` for headless test execution in CI/CD environments.

---

## 🧪 Test Cases Design

### ✅ Existing Test Cases

#### 1. Service Creation (via Sidebar)
-   **Path**: Click "Gateway Service" from the sidebar.
-   **Actions**: Input a `service-name` and a backend `url`.
-   **Key Consideration**: The **first create button** (on an empty state page) has different properties than the **add button** in the toolbar when services already exist.

#### 2. Route Creation (from Service Page)
-   **Path**: Navigate to a specific service's page.
-   **Actions**: Input a `tag`, a `path`, and an upstream `url`.

---

### 🔮 Planned Test Cases (To Be Added)

#### 1. Service Creation - Edge Case
-   Create a service **without** manually typing a name.
-   **Verify** the system auto-generates a name correctly.

#### 2. Route Creation - Multiple Scenarios
-   **Creation Path**: Create a route directly from the **Route sidebar**, not just from within a service page.
-   **UI Consideration**: Assert the difference between the `empty-state-action` and `toolbar-add` buttons on the routes list page.
-   **Service Selection**: Select a service name from a **Dropdown list** (from the routes page).
-   **Invalid Input Testing**:
    -   **Tags**: Input multiple tags as a single string (`tag1, tag2, tag3`) instead of a list. Verify the system handles this illegal input correctly.
    -   **Other Fields**: Test invalid inputs for other labels like `Hosts`, `Methods`, etc.

#### 3. Validation & Idempotency
-   Test if the system correctly handles attempts to create a service or route with an **already existing ID**.

---

## 🔭 Future Improvements

1.  **Parameterization**
    *   Replace hard-coded values with configurable parameters or fixtures.

2.  **Robust Assertions**
    *   Add assertions to check for the state of dynamic elements (e.g., assert a dropdown list is not empty before proceeding).
    *   Add checks for element existence to prevent false positives.

3.  **Error Handling**
    *   Implement `throw` statements or use Cypress's built-in failure mechanisms to explicitly fail tests when critical elements are not found or preconditions aren't met.

4.  **Dependency Management**
    *   Formalize test dependencies (e.g., using `before` hooks) to ensure a service exists before creating routes that depend on it.