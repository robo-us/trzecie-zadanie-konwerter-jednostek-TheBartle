document.getElementById("milimetry").addEventListener("input", function() {
  var mm = document.getElementById("milimetry").value;

  document.getElementById("kilometry").value = mm * 0.00001;

  document.getElementById("metry").value = mm * 0.001;

  document.getElementById("centymetry").value = mm * 0.1;
});



document.getElementById("centymetry").addEventListener("input", function() {
  var c = document.getElementById("centymetry").value;

  document.getElementById("kilometry").value = c * 0.00001;

  document.getElementById("metry").value = c * 0.01;

  document.getElementById("milimetry").value = c * 10;
});



document.getElementById("metry").addEventListener("input", function() {
  var m = document.getElementById("metry").value;
  document.getElementById("kilometry").value = m * 0.001;

  document.getElementById("centymetry").value = m / 0.01;

  document.getElementById("milimetry").value = m / 0.001;
});



document.getElementById("kilometry").addEventListener("input", function() {
  var km = document.getElementById("kilometry").value;
  document.getElementById("metry").value = km * 1000;

  document.getElementById("centymetry").value = km * 100000;

  document.getElementById("milimetry").value = km / 0.000001;
});
