const users = ["felipe", "kelyane", "isadora", "jhon"];

export function getUser() {
  return users;
}

export function addUser(user) {
  users.push(user);
}
