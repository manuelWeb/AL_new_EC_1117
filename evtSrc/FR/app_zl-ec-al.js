(function app_zl_zc_al() {
  console.log('heloo')

const randomz = ary => {
  let temp, random;
  // some comment
  ary.map(function(i) {
    random = Math.floor(Math.random() * ary.length);
    temp = ary[i];
    ary[i] = ary[random];
    ary[random] = temp;
  });
  return ary;
};
console.log(randomz([1, 2, 3, 4, 5, 6, 7]));

})();