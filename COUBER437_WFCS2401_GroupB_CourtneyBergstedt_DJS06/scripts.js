// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//forEach
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

//Name length
const nameLengths = names.map(name => name.length);
console.log(nameLengths);


// Filtering Cape Provinces
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

//Finding Names with 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);