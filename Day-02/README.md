# Day 02 - HTML Forms, Input Types & Advanced Multimedia Elements

Welcome to **Day 02** of the MERN Foundation Learning Program at **AD TECH Enterprises Pvt. Ltd.**

Today's module covers **HTML Forms**, **User Input Controls**, **Client-Side Form Validation**, and **HTML5 Multimedia & Advanced Elements** (`<audio>`, `<video>`, `<iframe>`, `<details>`, `<progress>`, `<meter>`).

---

## 🎯 Learning Objectives

By completing Day 02, you will master:
1. Building interactive web forms using `<form action="..." method="...">`.
2. Form controls and explicit labeling using `<label for="...">`.
3. Surveying all HTML5 input types (`text`, `password`, `email`, `number`, `tel`, `url`, `search`, `date`, `time`, `color`, `range`, `file`, `checkbox`, `radio`, `hidden`).
4. Essential form validation attributes (`required`, `placeholder`, `min`, `max`, `step`, `maxlength`, `minlength`, `pattern` regex, `disabled`, `readonly`, `autofocus`).
5. Grouping options using `<select>`, `<option>`, `<optgroup>`, `multiple`, and `<datalist>`.
6. Organizing complex forms semantically using `<fieldset>` and `<legend>`.
7. Embedding native audio (`<audio>`) and video (`<video>`) media players with controls, poster images, and fallbacks.
8. Embedding external web content safely using `<iframe>` and `sandbox` attributes.
9. Implementing interactive collapsible sections (`<details>` / `<summary>`), status progress bars (`<progress>`), measurement meters (`<meter>`), and native pop-up modals (`<dialog>`).
10. Applying all Day-02 concepts to build the **AD TECH Developer Program Registration & Technical Assessment Portal Mini Project**.

---

## 📂 File Directory & Overview

| File Name | Description |
| :--- | :--- |
| [`notes.md`](notes.md) | In-depth study notes & reference guide on HTML Forms, Validation, and Multimedia. |
| [`01_basic_forms_and_inputs.html`](01_basic_forms_and_inputs.html) | Basic form structure, labels, text, password, email, textareas, and submit/reset buttons. |
| [`02_input_types_and_attributes.html`](02_input_types_and_attributes.html) | HTML5 input types (date, color, range, file, etc.) and validation attributes (`min`, `max`, `pattern`). |
| [`03_selection_controls.html`](03_selection_controls.html) | Checkboxes, radio buttons, `<select>` dropdowns, `<optgroup>`, and autocomplete `<datalist>`. |
| [`04_form_grouping_and_validation.html`](04_form_grouping_and_validation.html) | Form organization using `<fieldset>`, `<legend>`, regex pattern matching, and validation feedback. |
| [`05_multimedia_audio_video.html`](05_multimedia_audio_video.html) | Native HTML5 audio and video playback elements with controls, poster, and fallback sources. |
| [`06_iframes_and_embeds.html`](06_iframes_and_embeds.html) | Embedding web pages and maps with `<iframe>`, `sandbox`, and responsive attributes. |
| [`07_advanced_html5_elements.html`](07_advanced_html5_elements.html) | Collapsible `<details>` / `<summary>`, progress bars (`<progress>`), meters (`<meter>`), and `<dialog>`. |
| [`mini_project_registration_form.html`](mini_project_registration_form.html) | **Day 2 Mini Project**: Full-featured AD TECH Developer Registration & Assessment Portal. |

---

## 💡 Key Takeaway & Best Practices
- **Always Link Labels to Inputs:** Use `for="id"` on `<label>` elements matching `id="..."` on inputs for web accessibility and clickability.
- **Use Specific Input Types:** Prefer `type="email"` or `type="number"` over generic `type="text"` to trigger native mobile keyboards and automatic client-side validation.
- **Group Related Form Fields:** Wrap complex forms into logical groups using `<fieldset>` and `<legend>`.
- **Provide Accessible Fallbacks:** Always include fallback text or alternative links inside `<audio>`, `<video>`, and `<iframe>` tags.
