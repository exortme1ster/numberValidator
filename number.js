function telephoneCheck(str) {
  const regexes = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/


  ]
  return regexes
  .some((x) => x.test(str));
}

telephoneCheck("555-  555-5555");
telephoneCheck("1 555-555-5555");