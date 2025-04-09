const slider = document.querySelector("#farlighed");
const dangerValue = document.querySelector("#range-value");

// sæt en eventlistener på den som opdaterer, når jeg laver ændringer
slider.addEventListener("input", updateValue);

function updateValue() {
  console.log("updateValue");
  console.log(slider.value);
  dangerValue.textContent = slider.value;

  if (slider.value > 49 && slider.value < 90) {
    console.log(`fareniveauet er ${slider.value}`);
    slider.parentNode.style.accentColor = "#ffff00";
    slider.style.backgroundColor = "var(--warning-color)";
  } else if (slider.value >= 90) {
    slider.parentNode.style.accentColor = "#f00";
    slider.style.backgroundColor = "var(--warning-color)";
  } else {
    slider.parentNode.style.accentColor = "#90ee90";
    slider.style.backgroundColor = "var(--warning-color)";
  }
}

document.querySelector("#webform").reset();

document.querySelector("#submit_btn").addEventListener("click", submitForm);
document.getElementById("reset_btn").addEventListener("click", function () {
  alert("Tak! Vi vender tilbage indenfor 5-7 arbejdsdage.");
  reset();
});

function submitForm() {
  document.querySelector("#sum").style.display = "block";

  document.querySelector("#sumAntal").textContent = document.querySelector(
    'input[name="what-1"]:checked'
  ).value;

  document.querySelector("#sumStreet").textContent =
    document.querySelector("#location-street").value;

  // select - option
  document.querySelector("#sumType").textContent =
    document.querySelector("#group-number").value;

  // checkboxe ------------------------------------------------------------
  const checkboxes = document.querySelectorAll(
    'input[name="behavior"]:checked'
  );

  // Fare-niveau
  document.querySelector("#sumDanger").textContent = `${slider.value}%`;

  // Situationstekst
  const situationText = document.querySelector("#beskrivelse").value;
  document.querySelector("#sumSituation").textContent = situationText;

  // Kontaktoplysninger
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phoneCode = document.querySelector("#area-code").value;
  const phone = document.querySelector("#telefon").value;
  const contactSummary = `${name}, ${email}${
    phone ? ", " + phoneCode + " " + phone : ""
  }`;
  document.querySelector("#sumContact").textContent = contactSummary;

  // Console log der viser hvad value er for vores checkbokse. (Man får kun en log
  // hvis man har udfyldt alle required input og tjekket en eller flere checkbokse af)
  console.log(checkboxes);

  // Laver et array
  const myArray = [];

  // Kalder funktionen lavListe for hvert element i checkboxes
  checkboxes.forEach(lavListe);

  // Pusher elementerne ind i myArray
  function lavListe(element) {
    myArray.push(element.value);
  }
  // Putter arrayet ind i summary og separerer med komma og mellemrum
  document.querySelector("#sumBehaviour").textContent = myArray.join(", ");
}

function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#sum").style.display = "none";
}
