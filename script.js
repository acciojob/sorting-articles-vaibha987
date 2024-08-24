const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let list=document.getElementById("bands")
bands.sort((a, b) => {
  return a-b;
});
bands.forEach(band => {
  let li = document.createElement("li");
  li.innerText = band;
  list.appendChild(li);
});