//in a function first arg get trunced acco to 2nd arg with '.......'
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-", 1);
