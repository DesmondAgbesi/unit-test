const {subtract, sum, divide, multiply} = require("./mat");

  
  it ("should sum two variables and return the result", ()=>{
    const result = sum(2, 2);
    expect(result).toBe(4);
  })
  
  it ("should multiply two variables and return the result", ()=>{
    const result = multiply(4, 5);
    expect(result).toBe(20);
  })

it ("should subtract two variables and return the result", ()=>{
  const result = subtract(80, 5);
  expect(result).toBe(75);
})

it ("should multiply two variables and return the result", ()=>{
  const result = divide(4000, 5);
  expect(result).toBe(800);
})

test("Array", ()=>{
  let days = ["monday", "tuesday", "wednesday"];
  expect(days).toContain("tuesday");
  expect(days).not.toContain("friday");
})