import request from "./request";

export const createRole = (params, successAction, failureAction) => {
  return request('roles', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction);
}

export const fetchRoles = (successAction, failureAction) => {
  return request('roles', {}, successAction, failureAction);
}

export const deleteRole = (params, successAction, failureAction) => {
  return request(`roles/${params}`, { method: 'DELETE' }, successAction, failureAction);
}

export const getRole = (id , successAction, failureAction) => {
  return request(`roles/${id}`, {}, successAction, failureAction);
}

export const updateRole = (params, id, successAction, failureAction) => {
  return request(`roles/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction);
}

export const fetchUsersForRole = (id , successAction, failureAction) => {
  console.log("about to fetch users for role");
  return request(`roles/${id}/assignable_users`, {}, successAction, failureAction);
}

export const addUsersToRole = (params, successAction, failureAction) => {
  return request(`roles/${params.role_id}/add_users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction);
}

export const removeUserFromRole = (params, successAction, failureAction) => {
  return request(`roles/${params.role_id}/remove_user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction);
}