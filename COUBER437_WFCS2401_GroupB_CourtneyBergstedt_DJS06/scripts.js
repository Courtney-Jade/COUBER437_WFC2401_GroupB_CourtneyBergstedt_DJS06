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

// Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

console.log(
  // Log Products
  'Log Products:\n' + products.map(product => product.product).join('\n') + '\n\n' +

  // Filter by Name Length
  'Filter by Name Length:\n' + products.filter(product => product.product.length <= 5).map(product => product.product).join('\n') + '\n\n' +

  // Price Manipulation
  'Price Manipulation:\n' +
  'Total price: $' +
  products
    .filter(product => product.price !== '')
    .map(product => Number(product.price))
    .reduce((total, price) => total + price, 0) +
  '\n\n' +

  // Concatenate Product Names
  'Concatenate Product Names:\n' +
  products.map(product => product.product).join(', ') +
  '\n\n' +

  // Find Extremes in Prices
  `Find Extremes in Prices:\nHighest: $${
    products
      .filter(product => typeof product.price === 'number' && !isNaN(product.price))
      .map(product => product.price)
      .reduce((max, price) => Math.max(max, price), 0)
  }. Lowest: $${
    products
      .filter(product => typeof product.price === 'number' && !isNaN(product.price))
      .map(product => product.price)
      .reduce((min, price) => Math.min(min, price), Infinity)
  }` +
  '\n\n' +

  // Object Transformation
  'Object Transformation:\n' +
  JSON.stringify(
    Object.fromEntries(
      products
        .filter(product => product.product && product.price !== '')
        .map(product => [
          'name',
          product.product,
          'cost',
          typeof product.price === 'number' ? product.price : Number(product.price),
        ])
        .reduce((arr, [key, val, key2, val2]) => arr.concat([[key, val], [key2, val2]]), [])
    ),
    null,
    2
  )
);