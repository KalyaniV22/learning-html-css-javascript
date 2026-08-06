# Day 03 - CSS & Flexbox Layouts Reference Notes

---

## 1. Introduction to CSS

### What is CSS?
**CSS** stands for **Cascading Style Sheets**. It describes how HTML elements are to be displayed on screen, paper, or in other media.

### 3 Ways to Apply CSS:
1. **External CSS (Recommended):** Linked via `<link rel="stylesheet" href="style.css">` inside `<head>`.
2. **Internal CSS:** Written inside `<style>` tags in `<head>`.
3. **Inline CSS:** Applied directly on HTML elements using `style="..."` (Avoid for maintainability!).

---

## 2. CSS Selectors & Specificity

### Core Selectors:
- **Element Selector:** Targets HTML tags (`h1`, `p`, `div`).
- **Class Selector (`.className`):** Reusable selector targeting elements with `class="className"`.
- **ID Selector (`#idName`):** Unique selector targeting an element with `id="idName"`.
- **Universal Selector (`*`):** Targets every element on the page (commonly used for CSS reset).
- **Group Selector:** Targets multiple elements (`h1, h2, h3 { color: blue; }`).
- **Descendant Selector:** Targets nested elements (`nav ul li a`).

### Specificity Hierarchy (Highest to Lowest):
1. `!important` rule (Overrules everything)
2. Inline styles (`style="..."`)
3. ID Selectors (`#header`)
4. Class / Attribute / Pseudo-class Selectors (`.btn`, `[type="text"]`, `:hover`)
5. Element / Pseudo-element Selectors (`h1`, `::before`)

---

## 3. The CSS Box Model

Every HTML element is rendered as a rectangular box consisting of 4 layers:

```text
+-----------------------------------+
|              MARGIN               |
|  +-----------------------------+  |
|  |           BORDER            |  |
|  |  +-----------------------+  |  |
|  |  |        PADDING        |  |  |
|  |  |  +-----------------+  |  |  |
|  |  |  |     CONTENT     |  |  |  |
|  |  |  +-----------------+  |  |  |
|  |  +-----------------------+  |  |
|  +-----------------------------+  |
+-----------------------------------+
```

- **Content:** The actual text, image, or child element.
- **Padding:** Space inside the border, surrounding the content.
- **Border:** Border line surrounding the padding and content.
- **Margin:** Space outside the border, separating the element from neighboring elements.

### The Golden Rule: `box-sizing: border-box`
By default (`box-sizing: content-box`), padding and border increase the element's total rendered width. Setting:

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```
ensures that specified `width` includes content, padding, and border!

---

## 4. CSS Flexbox Layout System

Flexbox (Flexible Box Layout) is a 1-dimensional layout module designed for distributing space along a single axis (either row horizontally or column vertically).

### Terminology:
- **Flex Container:** Parent element with `display: flex`.
- **Flex Items:** Direct child elements of a flex container.
- **Main Axis:** Primary direction defined by `flex-direction` (default horizontal `row`).
- **Cross Axis:** Perpendicular axis to the main axis (default vertical `column`).

---

## 5. Flex Container Properties

| Property | Values | Description |
| :--- | :--- | :--- |
| `display` | `flex`, `inline-flex` | Enables flex context for children. |
| `flex-direction` | `row` (default), `row-reverse`, `column`, `column-reverse` | Sets main axis orientation. |
| `flex-wrap` | `nowrap` (default), `wrap`, `wrap-reverse` | Controls whether items wrap onto multiple lines. |
| `justify-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` | Aligns items along main axis. |
| `align-items` | `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline` | Aligns items along cross axis. |
| `align-content` | `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch` | Aligns multi-line flex tracks along cross axis. |
| `gap` | `<length>` (e.g. `20px`, `1.5rem`) | Sets gap spacing between flex items without margins. |

---

## 6. Flex Item Properties

| Property | Value / Default | Description |
| :--- | :--- | :--- |
| `flex-grow` | `<number>` (default `0`) | Ability for flex item to grow if extra space exists. |
| `flex-shrink` | `<number>` (default `1`) | Ability for flex item to shrink if space is insufficient. |
| `flex-basis` | `<length>` / `auto` (default `auto`) | Initial size of item before space distribution. |
| `flex` | Shorthand: `flex-grow flex-shrink flex-basis` (e.g., `flex: 1 1 auto` or `flex: 1`) | Recommended shorthand property. |
| `align-self` | `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch` | Overrides container `align-items` for a single item. |
| `order` | `<integer>` (default `0`) | Controls visual order of flex items. |
