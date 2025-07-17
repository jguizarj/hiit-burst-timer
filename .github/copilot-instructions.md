<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project is a Vite React TypeScript HIIT timer fitness app. The main UI shows a countdown timer, current and next speeds or intensities, and a bar graph of interval intensities, highlighting the current interval.

# Copilot Instructions

## Code Style Guidelines

1. **Self-Documented Code**:

   - Write code that is clear and easy to understand without requiring excessive comments.
   - Use meaningful variable, function, and class names.
   - Avoid magic numbers; use constants with descriptive names.

2. **JSDoc for Documentation**:

   - Use JSDoc to document functions, classes, and modules.
   - Include descriptions, parameter types, and return types.

3. **Modern ES6 Syntax**:

   - Use `const` and `let` instead of `var`.
   - Prefer arrow functions for components and anonymous functions.
   - Use template literals for string concatenation.
   - Destructure props and state wherever possible.

4. **Clean Code Principles**:
   - Keep functions small and focused on a single responsibility.
   - Remove unused imports and variables.
   - Ensure consistent indentation and spacing.

## Maintainability

- Refactor large components into smaller, reusable ones.
- Use TypeScript interfaces for prop validation.
- Ensure components are modular and easy to test.

## Example Configuration

```javascript
/**
 * Example of a clean and maintainable functional component.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display.
 * @param {Function} props.onClick - The click handler function.
 * @returns {JSX.Element} The rendered component.
 */
const ExampleComponent = ({ title, onClick }) => (
  <div className="example-component">
    <h1>{title}</h1>
    <button onClick={onClick}>Click Me</button>
  </div>
);

export default ExampleComponent;
```
