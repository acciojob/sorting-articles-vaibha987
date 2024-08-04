const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let list=document.getElementById("band")
bands.sort((a, b) => {
  let bandA = a.replace(/^(a |the |an )/i, '').trim();
  let bandB = b.replace(/^(a |the |an )/i, '').trim();
  return bandA < bandB ? -1 : 1;
});
bands.forEach(band => {
  let li = document.createElement("li");
  li.innerText = band;
  list.appendChild(li);
});