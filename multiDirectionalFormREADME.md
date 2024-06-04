# jsDeliver Link
// https://cdn.jsdelivr.net/gh/tylerthibault/webflow/multiDirectionalForm.js


# Explanation:
## HTML Structure:
- Each form section is wrapped in a div with a data-section-id attribute.
- The select and button elements have data-next-section attributes indicating which section to show next.
- Forms are identified using a data-form-id attribute to handle multiple forms on the same page.

```html
<form class="dynamic-form" data-form-id="form1">
  <div class="form-section" data-section-id="1">
    <label for="question1">Choose an option:</label>
    <select id="question1" name="question1" data-next-section="2" data-form-id="form1">
      <option value="" disabled selected>Select an option</option>
      <option value="A" data-next-section="2">Option A</option>
      <option value="B" data-next-section="3">Option B</option>
    </select>
  </div>

  <div class="form-section" data-section-id="2" style="display:none;">
    <label for="question2">You chose A. Next question:</label>
    <input type="text" id="question2" name="question2" data-next-section="4" data-form-id="form1">
    <button type="button" class="next-button" data-next-section="4" data-form-id="form1">Next</button>
  </div>

  <div class="form-section" data-section-id="3" style="display:none;">
    <label for="question3">You chose B. Next question:</label>
    <input type="text" id="question3" name="question3" data-next-section="4" data-form-id="form1">
    <button type="button" class="next-button" data-next-section="4" data-form-id="form1">Next</button>
  </div>

  <div class="form-section" data-section-id="4" style="display:none;">
    <label for="final">Final question:</label>
    <input type="text" id="final" name="final">
    <button type="submit">Submit</button>
  </div>
</form>

```

## JavaScript:

- showNextSection: A function to hide the current section and display the next one.
- Event Listeners: Listeners are added to select elements and button elements to trigger navigation based on the selected option or button click.

```js
document.addEventListener('DOMContentLoaded', function () {
  // Function to show the next section based on the current selection
  function showNextSection(currentSectionId, nextSectionId, formId) {
    const currentSection = document.querySelector(`.form-section[data-section-id="${currentSectionId}"][data-form-id="${formId}"]`);
    const nextSection = document.querySelector(`.form-section[data-section-id="${nextSectionId}"][data-form-id="${formId}"]`);
    
    if (currentSection && nextSection) {
      currentSection.style.display = 'none';
      nextSection.style.display = 'block';
    }
  }

  // Event listener for select elements
  document.querySelectorAll('select[data-next-section]').forEach(selectElement => {
    selectElement.addEventListener('change', function () {
      const nextSectionId = this.options[this.selectedIndex].getAttribute('data-next-section');
      const formId = this.getAttribute('data-form-id');
      const currentSectionId = this.closest('.form-section').getAttribute('data-section-id');
      showNextSection(currentSectionId, nextSectionId, formId);
    });
  });

  // Event listener for buttons
  document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', function () {
      const nextSectionId = this.getAttribute('data-next-section');
      const formId = this.getAttribute('data-form-id');
      const currentSectionId = this.closest('.form-section').getAttribute('data-section-id');
      showNextSection(currentSectionId, nextSectionId, formId);
    });
  });
});
```