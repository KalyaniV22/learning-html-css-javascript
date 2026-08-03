# Day 02 - HTML Forms & Advanced Elements Reference Notes

---

## 1. Introduction to HTML Forms

### What is an HTML Form?
An **HTML Form** is a section of a web page designed to collect user input (e.g., text, choices, selections, file uploads) and transmit it to a web server for processing (or handle it locally via JavaScript).

### The `<form>` Tag and Key Attributes:
```html
<form action="/submit-endpoint" method="POST" enctype="multipart/form-data" target="_self">
    <!-- Form Controls Here -->
</form>
```

- `action`: The URL or server endpoint where form data is sent upon submission. (If empty or `#`, it submits to the current page).
- `method`: The HTTP method used to send data:
  - `GET`: Appends form data to the URL as query parameters (`?key=value`). Used for search queries or non-sensitive data retrieval. (Public & bookmarked, data limit ~2048 chars).
  - `POST`: Sends form data hidden inside the HTTP request body. Used for sensitive data (passwords), large datasets, and database modifications.
- `enctype`: Specifies how form data is encoded when sending via POST:
  - `application/x-www-form-urlencoded` (Default): All characters are encoded before sending.
  - `multipart/form-data`: Required when your form includes **file upload fields** (`<input type="file">`).
- `target`: Specifies where to display the response (`_self`, `_blank`).
- `novalidate`: Boolean attribute to disable browser default client-side validation for custom JS handling.

---

## 2. Labels and Accessibility (`<label>`)

The `<label>` element represents a caption for an item in a user interface.

### Why `<label>` is Crucial:
1. **Accessibility:** Screen readers announce the label text when a user focuses on the corresponding input field.
2. **User Experience (UX):** Clicking the label text automatically shifts focus/cursor into the input field or toggles a radio/checkbox.

### Two Ways to Associate Labels:
1. **Explicit Association (Recommended):**
   ```html
   <label for="user-email">Email Address:</label>
   <input type="email" id="user-email" name="email">
   ```
   *(The `for` attribute value MUST match the `id` attribute value of the target input).*

2. **Implicit Wrapping:**
   ```html
   <label>
       Password:
       <input type="password" name="password">
   </label>
   ```

---

## 3. HTML5 Input Types Survey

HTML5 introduced specialized input types that provide built-in client validation and trigger optimal mobile touch keyboards.

| Input Type | Purpose & Mobile Keyboard Behavior | Example Syntax |
| :--- | :--- | :--- |
| `text` | Single-line plain text input | `<input type="text" name="username">` |
| `password` | Masked text input (dots/asterisks) | `<input type="password" name="pwd">` |
| `email` | Email address validation + `@` keyboard on mobile | `<input type="email" name="user_email">` |
| `number` | Numeric values + numeric keypad on mobile | `<input type="number" name="age" min="18" max="100">` |
| `tel` | Telephone numbers + phone keypad on mobile | `<input type="tel" name="phone">` |
| `url` | Web page address starting with http:// or https:// | `<input type="url" name="website">` |
| `search` | Search input (often displays an 'X' to clear text) | `<input type="search" name="query">` |
| `date` | Date picker widget (YYYY-MM-DD) | `<input type="date" name="dob">` |
| `time` | Time picker widget (HH:MM) | `<input type="time" name="appointment">` |
| `datetime-local` | Date and time picker widget combined | `<input type="datetime-local" name="meeting">` |
| `color` | Native color picker wheel/palette | `<input type="color" name="fav_color">` |
| `range` | Slider control for selecting numeric ranges | `<input type="range" name="volume" min="0" max="100">` |
| `file` | File upload chooser button | `<input type="file" name="resume" accept=".pdf,.docx">` |
| `checkbox` | Multi-select toggle box | `<input type="checkbox" name="skills" value="html">` |
| `radio` | Single-select radio button (in a named group) | `<input type="radio" name="gender" value="female">` |
| `hidden` | Hidden data field sent to server without UI display | `<input type="hidden" name="user_id" value="101">` |

---

## 4. Form Validation & Control Attributes

Form attributes enforce data formatting standards directly in the browser before network transmission.

- `required`: Mandatory field; form cannot submit if empty.
- `placeholder`: Temporary hint text displayed inside input when empty.
- `value`: Default pre-filled value of the input element.
- `disabled`: Disables interaction and excludes field data from submission.
- `readonly`: Displays value but prevents user editing (field data IS included in submission).
- `min` / `max`: Sets minimum and maximum numerical or date boundaries.
- `step`: Specifies valid granular intervals for range or numeric inputs.
- `minlength` / `maxlength`: Enforces character count constraints.
- `pattern`: Regular Expression (Regex) that input value must match to pass validation.
- `autofocus`: Automatically places cursor focus in this field when page loads.
- `autocomplete="on|off"`: Enables or disables browser autofill suggestions.
- `multiple`: Allows selecting multiple files or multiple dropdown items.

---

## 5. Selection Controls & Grouping

### 1. Checkboxes vs Radio Buttons
- **Radio Buttons (`type="radio"`):** Allow selecting **only ONE** option from a group. All radios in the group MUST share the **exact same `name` attribute**.
- **Checkboxes (`type="checkbox"`):** Allow selecting **ZERO, ONE, or MULTIPLE** independent choices.

### 2. Dropdown Lists (`<select>` & `<option>`)
```html
<select name="country" id="country">
    <option value="">-- Select Country --</option>
    <option value="in" selected>India</option>
    <option value="us">United States</option>
</select>
```

- `<optgroup label="...">`: Groups related `<option>` tags inside a dropdown menu.
- `multiple`: Converts dropdown into a scrollable multi-select box.

### 3. Autocomplete Datalist (`<datalist>`)
Combines text input typing with dropdown auto-suggestions:

```html
<label for="browser-choice">Preferred Browser:</label>
<input list="browsers" id="browser-choice" name="browser">

<datalist id="browsers">
    <option value="Google Chrome">
    <option value="Mozilla Firefox">
    <option value="Microsoft Edge">
    <option value="Safari">
</datalist>
```

---

## 6. Form Organization (`<fieldset>` & `<legend>`)

- `<fieldset>`: Draws a visual and semantic bounding box around a group of related form controls.
- `<legend>`: Defines a caption title for the `<fieldset>` group.

```html
<fieldset>
    <legend>Personal Information</legend>
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname">
</fieldset>
```

---

## 7. HTML5 Multimedia Elements

HTML5 introduced native audio and video playback without requiring external plugins (like Flash).

### 1. Native Video Player (`<video>`)
```html
<video width="640" height="360" controls poster="thumbnail.jpg" preload="metadata">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English">
    Your browser does not support native HTML5 video playback.
</video>
```
- Attributes: `controls`, `autoplay`, `loop`, `muted`, `poster` (cover photo image), `preload="none|metadata|auto"`.

### 2. Native Audio Player (`<audio>`)
```html
<audio controls preload="auto">
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

---

## 8. Iframes & External Embeds (`<iframe>`)

An `<iframe>` (Inline Frame) embeds another HTML document directly inside the current web page.

```html
<iframe src="https://example.com" width="100%" height="400" title="Embedded Web Page" loading="lazy" sandbox="allow-scripts allow-same-origin"></iframe>
```

### Key Attributes & Security:
- `src`: URL of page to embed.
- `srcdoc`: Direct inline HTML string to render inside frame.
- `title`: Accessible descriptive name for screen readers.
- `loading="lazy"`: Defers loading iframe content until scrolled into view.
- `sandbox`: Restricts iframe capabilities for security:
  - `sandbox=""`: Enables maximum security restrictions (blocks scripts, forms, popups).
  - `sandbox="allow-scripts allow-forms"`: Selectively enables specific capabilities.

---

## 9. Advanced HTML5 Interactive Elements

### 1. Collapsible Accordion (`<details>` & `<summary>`)
Creates native open/close toggle widgets without JavaScript:

```html
<details>
    <summary>Click to view FAQ Details</summary>
    <p>This hidden text expands when the summary is clicked!</p>
</details>
```

### 2. Progress Bar (`<progress>`)
Displays completion progress of a task (e.g., file upload, step 3 of 5):

```html
<label for="file-progress">Upload Progress:</label>
<progress id="file-progress" value="70" max="100">70%</progress>
```

### 3. Measurement Meter (`<meter>`)
Displays scalar measurements within a known range or fractional value (e.g., disk usage, battery level, test score):

```html
<label for="disk-usage">Storage Used:</label>
<meter id="disk-usage" value="65" min="0" max="100" low="30" high="80" optimum="20">65%</meter>
```

### 4. Native Dialog Modal (`<dialog>`)
Represents a popup dialog window or modal box:

```html
<dialog open>
    <p>This is a native HTML5 dialog modal window!</p>
</dialog>
```
