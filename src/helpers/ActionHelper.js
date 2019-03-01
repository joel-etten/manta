export const createAction = (type, payload = {}, name = '', status = '') => ({
  type, payload, name, status,
})
