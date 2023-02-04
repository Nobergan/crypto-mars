export function validatePhoneInput(inputValue) {
  switch (inputValue) {
    case '+380':
      window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
      break;
    case '+7':
      window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
      break;
    case '+90':
      window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
      break;
    case '+55':
      window.phonePattern = /^([0-9]{12,13})?(\+[0-9]{12,13})?$/i;
      break;
    case '+351':
      window.phonePattern = /^([0-9]{12,13})?(\+[0-9]{12,13})?$/i;
      break;
    case '+994':
      window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
      break;
    case '+998':
      window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
      break;
    case '+51':
      window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
      break;
    case '+91':
      window.phonePattern = /^([0-9]{12})?(\+[0-9]{12})?$/i;
      break;
    case '+77':
      window.phonePattern = /^([0-9]{11})?(\+[0-9]{11})?$/i;
      break;
    default:
      window.phonePattern = /^([0-9]{9,13})?(\+[0-9]{9,13})?$/i;
  }
}
