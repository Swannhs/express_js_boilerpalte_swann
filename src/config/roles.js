const adminRights = ['post', 'user'];

const allRoles = {
  user: [],
  admin: [adminRights],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  adminRights,
  roles,
  roleRights,
};
