const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b)
  }, 2000)
}

add(2, 3, (sum) => {
  console.log(sum) // should output 5 after 2 seconds
})
