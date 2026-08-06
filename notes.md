# Day 03 — CSS Flexbox Practice

## Topic Covered
CSS Flexbox (part of the assignment's CSS practice list: Layouts & Flexbox)

## What is Flexbox?
Flexbox (Flexible Box Layout) is a one-dimensional CSS layout system used to
arrange items in a row or a column, distribute space between them, and align
them easily — without using floats or manual positioning.

## Key Concepts Practiced Today

### 1. Container properties (applied to the parent)
- `display: flex;` → turns an element into a flex container
- `flex-direction` → sets the main axis: `row`, `row-reverse`, `column`, `column-reverse`
- `justify-content` → aligns items along the main axis
  (`flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`)
- `align-items` → aligns items along the cross axis
  (`stretch`, `flex-start`, `flex-end`, `center`, `baseline`)
- `flex-wrap` → controls whether items wrap to a new line (`nowrap`, `wrap`, `wrap-reverse`)
- `gap` → adds spacing between flex items without using margins

### 2. Item properties (applied to the children)
- `flex-grow` → how much an item grows relative to siblings when extra space is available
- `flex-shrink` → how much an item shrinks when space is tight
- `flex-basis` → the starting size of an item before growing/shrinking
- `flex` (shorthand) → `flex: grow shrink basis;`
- `align-self` → overrides `align-items` for a single item
- `order` → changes the visual order of an item without changing HTML order

## Exercise Files
| File | Concept Practiced |
|------|--------------------|
| `01-flex-direction.html` | Row vs column layouts |
| `02-justify-content.html` | Main-axis alignment options |
| `03-align-items.html` | Cross-axis alignment options |
| `04-flex-wrap-and-sizing.html` | Wrapping + grow/shrink/basis + order |

## Key Takeaways
- Flexbox is best for laying out items in a **single row or column**.
- `justify-content` = main axis, `align-items` = cross axis — direction changes which is which.
- `flex-wrap` is essential for responsive rows that need to break onto new lines on smaller screens.
- `flex-grow`/`flex-shrink`/`flex-basis` give fine control over how items share available space.
