# Day 01 - HTML Basics Reference Notes

---

## 1. Introduction to HTML

### What is HTML?
**HTML** stands for **HyperText Markup Language**. It is the standard markup language used to structure web pages and their content.

- **HyperText:** Refers to links that connect web pages to one another, either within a single website or between different websites.
- **Markup Language:** A computer language that uses **tags** to define elements within a document (e.g., text, images, tables, forms).

### How the Web Works (Client-Server Architecture)
1. **Client (Browser):** A user enters a URL (e.g., `https://example.com`) or clicks a link.
2. **HTTP Request:** The browser sends a request across the internet to the Web Server hosting the site.
3. **Server Response:** The web server responds by sending back HTML, CSS, JavaScript files, images, etc.
4. **Rendering:** The browser receives the HTML text file, parses the HTML DOM tree, and renders it visually on the screen.

---

## 2. Anatomy of an HTML Document

Every valid HTML5 document follows a standardized basic skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
```

### Key Components Explained:
- `<!DOCTYPE html>`: Informs the browser that this is an **HTML5** document. Must always be the very first line of code.
- `<html lang="en">`: The root element of an HTML page. The `lang="en"` attribute specifies English as the primary language (crucial for SEO and screen readers).
- `<head>`: Contains metadata, character set encoding, viewport settings, title, and external stylesheets/scripts. Information in `<head>` is not displayed directly on the webpage canvas.
  - `<meta charset="UTF-8">`: Specifies UTF-8 character encoding (supports almost all characters and symbols worldwide).
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Ensures proper rendering and scaling on mobile devices.
  - `<title>`: Specifies the title of the document shown in the browser tab and search engine results.
- `<body>`: Contains all visible content of the web page (headings, paragraphs, images, tables, links, forms).

---

## 3. Elements, Tags, and Attributes

### HTML Elements vs Tags
- **Tag:** Keyword enclosed in angle brackets (e.g., `<p>` for opening tag, `</p>` for closing tag).
- **Element:** The complete unit consisting of an opening tag, content, and closing tag.
  ```html
  <p>This entire line is an HTML element.</p>
  ```
- **Self-Closing / Void Elements:** Tags that do not have closing tags or inner content (e.g., `<img>`, `<br>`, `<hr>`, `<meta>`, `<input>`).

### Attributes
Attributes provide additional information or properties to an HTML element. They are always specified inside the **opening tag** in `name="value"` pairs.

```html
<a href="https://github.com" target="_blank" title="GitHub Website">Visit GitHub</a>
```
- `href`: Specifies the URL target.
- `target="_blank"`: Opens the link in a new browser tab.
- `title`: Shows a browser tooltip on hover.

---

## 4. Text Formatting & Typography

### Headings
HTML provides 6 levels of headings: `<h1>` (most important / largest) to `<h6>` (least important / smallest).

- Rule: Use only **one `<h1>` tag per page** for SEO and structural clarity.

### Paragraphs & Line Breaks
- `<p>`: Defines a paragraph block. Browsers automatically add vertical margin before and after paragraphs.
- `<br>`: Forces a single line break within text (self-closing).
- `<hr>`: Creates a horizontal thematic break line.

### Semantic Text Formatting Tags
| Tag | Purpose / Meaning | Visual Rendering (Default) |
| :--- | :--- | :--- |
| `<b>` | Bold text (stylistic only, no semantic importance) | **Bold** |
| `<strong>` | Strong importance / urgency | **Bold** |
| `<i>` | Italic text (idiomatic voice / technical term) | *Italic* |
| `<em>` | Emphasized text (stress emphasis) | *Italic* |
| `<mark>` | Highlighted text | Marked text |
| `<small>` | Small print / side comments / disclaimers | Small text |
| `<sub>` | Subscript (e.g., H₂O) | H<sub>2</sub>O |
| `<sup>` | Superscript (e.g., X²) | X<sup>2</sup> |
| `<del>` | Deleted / struck-through text | ~Deleted~ |
| `<ins>` | Inserted / underlined text | <u>Inserted</u> |
| `<code>` | Inline computer code snippet | `Monospace` |
| `<pre>` | Preformatted text (preserves spaces and line breaks) | Monospace block |
| `<blockquote>` | Multi-line quotation from another source | Indented block |

---

## 5. Lists in HTML

Lists organize related items cleanly. HTML supports 3 main types of lists:

### 1. Unordered List (`<ul>`)
Used when item order does not matter (bullet points).
```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

### 2. Ordered List (`<ol>`)
Used when sequence or numerical ranking matters.
- Attributes: `type="1|a|A|i|I"`, `start="5"`, `reversed`
```html
<ol type="1">
    <li>Step 1: Install Git</li>
    <li>Step 2: Clone repository</li>
    <li>Step 3: Push code</li>
</ol>
```

### 3. Description / Definition List (`<dl>`)
Used for glossaries, metadata key-value pairs, or term definitions.
- `<dl>`: Description List wrapper
- `<dt>`: Term name
- `<dd>`: Definition / Description of the term

---

## 6. Links & Hyperlinks (`<a>`)

Hyperlinks connect pages and resources across the web using the `<a>` (anchor) tag.

### Types of Links:
1. **Absolute Link:** Links to an external site URL.
   ```html
   <a href="https://google.com">Google</a>
   ```
2. **Relative Link:** Links to another page within the same project directory.
   ```html
   <a href="./about.html">About Us</a>
   ```
3. **Anchor Link (Bookmark):** Jumps to a specific element ID on the same page.
   ```html
   <a href="#contact-section">Jump to Contact</a>
   ```
4. **Email Link:** Opens default email client.
   ```html
   <a href="mailto:developer@example.com">Email Me</a>
   ```
5. **Telephone Link:** Initiates a phone call on mobile devices.
   ```html
   <a href="tel:+1234567890">Call Support</a>
   ```

---

## 7. Images & Media (`<img>`)

Images enhance web aesthetics and communicate visual information.

### The `<img>` Tag
The `<img>` element is a self-closing tag.

```html
<img src="path/to/image.jpg" alt="Descriptive text for accessibility" width="600" height="400">
```

### Key Attributes:
- `src`: Image file path (relative or absolute URL).
- `alt`: Alternate text shown if the image fails to load and read out by screen readers (Essential for Accessibility/WCAG!).
- `width` & `height`: Specifies image dimensions in pixels.

### Semantic Figure Tag (`<figure>` and `<figcaption>`)
Encapsulates an image alongside an explicit visual caption:

```html
<figure>
    <img src="chart.jpg" alt="Sales Chart Q3">
    <figcaption>Figure 1: Quarterly Sales Revenue Growth.</figcaption>
</figure>
```

---

## 8. HTML Tables (`<table>`)

Tables present structured two-dimensional data in rows and columns.

### Table Structure Tags:
- `<table>`: Main wrapper element.
- `<caption>`: Accessible title of the table.
- `<thead>`: Groups table header content.
- `<tbody>`: Groups table main body content.
- `<tfoot>`: Groups table footer / summary content.
- `<tr>`: Table row.
- `<th>`: Header cell (bold and centered by default).
- `<td>`: Standard data cell.

### Spanning Rows and Columns:
- `colspan="N"`: Merges a cell across `N` columns horizontally.
- `rowspan="N"`: Merges a cell across `N` rows vertically.

---

## 9. Block-level vs Inline-level Elements

Understanding the difference between block and inline elements is crucial for web layout design:

| Feature | Block-level Elements | Inline-level Elements |
| :--- | :--- | :--- |
| **Line Behavior** | Always starts on a **new line**. | Appears **inline** (on the same line next to adjacent content). |
| **Width** | Takes up the **full available width** of its parent container. | Takes up only as much width as its **content requires**. |
| **Containing Rules** | Can contain other block and inline elements. | Can generally only contain text or other inline elements. |
| **Examples** | `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<header>`, `<main>`, `<section>`, `<table>`, `<form>` | `<span>`, `<a>`, `<b>`, `<strong>`, `<i>`, `<em>`, `<img>`, `<code>`, `<mark>` |

---

## 10. Semantic HTML5 Layout Structure

**Semantic HTML** means using tags that convey **meaning** and **purpose** about the content inside them, rather than using generic `<div>` containers everywhere.

### Benefits of Semantic HTML:
1. **SEO Optimization:** Search engines easily understand page structure and rank relevant content higher.
2. **Accessibility (a11y):** Screen readers use semantic landmark regions to help visually impaired users navigate.
3. **Clean & Maintainable Code:** Other developers can easily read and maintain the code.

### Core HTML5 Semantic Structural Tags:
- `<header>`: Introduces a page or section (contains logo, main title, primary navigation).
- `<nav>`: Encapsulates navigation links.
- `<main>`: Contains the unique, main central content of the document (should only be used once per page).
- `<section>`: Defines a thematic grouping of content, typically with a heading.
- `<article>`: Represents a self-contained, independent piece of content (e.g., blog post, news story, forum post).
- `<aside>`: Contains tangential / secondary content related to surrounding area (e.g., sidebar, quick links, author info).
- `<footer>`: Defines the footer of a page or section (copyright info, contact links, sitemap).

---

## 11. HTML Comments
Comments are ignored by the browser and are used to document code for developers.

Syntax:
```html
<!-- This is a single line HTML comment -->

<!--
    This is a multi-line HTML comment.
    Use comments to clarify complex sections or outline structure.
-->
```
