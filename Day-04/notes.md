# Day 04 - CSS Grid, Responsive Design & Animations Notes

---

## 1. Introduction to CSS Grid

### Flexbox vs CSS Grid:
- **Flexbox:** 1-Dimensional (row OR column). Ideal for components, navbars, and item alignment.
- **CSS Grid:** 2-Dimensional (rows AND columns simultaneously). Ideal for page layouts, galleries, and dashboard grids.

---

## 2. CSS Grid Container Properties

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
}
```

- `display: grid`: Activates grid layout context.
- `grid-template-columns`: Defines column track widths.
- `fr` (Fractional Unit): Represents a fraction of available space in grid container.
- `repeat(count, track)`: Repeats grid columns efficiently.
- `minmax(min, max)`: Defines a size range (e.g., `minmax(250px, 1fr)`).
- `auto-fit` vs `auto-fill`: Automatically wraps columns into available space without media queries.

---

## 3. Responsive Web Design & Media Queries

### Mobile-First Approach:
Write default CSS targeting mobile screens first, then use `@media` queries with `min-width` to layer desktop styles as viewport size increases.

```css
/* Base styles (Mobile) */
.card { width: 100%; }

/* Tablet (>= 768px) */
@media (min-width: 768px) {
    .card { width: 48%; }
}

/* Desktop (>= 1024px) */
@media (min-width: 1024px) {
    .card { width: 31%; }
}
```

---

## 4. CSS Transitions & Transforms

### Transitions:
Smoothly morphs property changes from state A to state B.

```css
.btn {
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;
}
.btn:hover {
    transform: translateY(-4px) scale(1.05);
}
```

### 2D Transforms:
- `translate(x, y)`: Shifts element position.
- `scale(x, y)`: Resizes element.
- `rotate(deg)`: Rotates element.

---

## 5. CSS Keyframe Animations (`@keyframes`)

Keyframes allow multi-step complex animations.

```css
@keyframes pulseGlow {
    0% {
        box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(56, 189, 248, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
    }
}

.glowing-badge {
    animation: pulseGlow 2s infinite;
}
```
