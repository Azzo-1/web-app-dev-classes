// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = "autosave_";

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler(event) {
  // save the event target on input

  let field = event.target;

  // set value of field to input value (e.g. autosave_name, autosave_address)
  localStorage.setItem(prefix + field.id, field.value);
}

/**
 * Clear all of the saved fields from storage
 */
function clearStorage() {
  let fields = form.elements;

  for (let field of fields) {
    localStorage.removeItem(prefix + field.id);
  }
}

/**
 * Load saved data from localStorage
 */
function loadSaved() {
  let fields = form.elements;

  for (let field of fields) {
    let saved = localStorage.getItem(prefix + field.id);

    // check if it exists

    if (!saved) {
      continue;
    }

    field.value = saved;
  }
}

// Load saved data from localStorage
loadSaved();
// Listen for DOM events

// On form input (like typing) run inputhandler
form.addEventListener("input", inputHandler);

//Clears form fields on submission of form
form.addEventListener("submit", clearStorage);
