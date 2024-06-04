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
  