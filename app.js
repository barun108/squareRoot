// Hare Krishna
// Finding factors
function getAllFactors(n) {
  let factors = [];

  for (let i = 2; i <= n; i++) {
    while ((n % i) === 0) {
      factors.push(i);
      n /= i;
    }
  }

  return factors;
}

// Finding ocurrences of factors
const countOccurrences = (arr) => {
  const map = {};
  for (var i = 0; i < arr.length; i++) {
    map[arr[i]] = ~~map[arr[i]] + 1;
  }
  return map;
};

// Sum a, b times
function calc(a, b) {
  sum = 0;
  for (let i = 1; i <= b / 2; i++) {
    sum += a;
  }
  return sum;
}

// Check if number is even
const isEven = (v) => v % 2 === 0;

// Calculating root by multiplying sum of occurences of factors
function getRoot(n) {
  let root = 1;
  let occur = countOccurrences(getAllFactors(n));
  if (Object.values(occur).every(isEven)) {
    for (const [key, value] of Object.entries(occur)) {
      root = root * calc(parseInt(key), parseInt(value));
    }
  }
    return root;
}

console.log(getRoot(529));

// Showing result to HTML file

let b = document.getElementById("btn");

b.addEventListener('click', showResult);

function showResult() {
            let p = document.getElementById("p1");
    let t = document.getElementById("inp1").value;
    if(parseInt(t)) {
        let r = getRoot(parseInt(t))
        if (r !== 1) {
            p.textContent = "Root is : " + r;
        } else {
            p.textContent = "Root not possible"
        }
    }
}


