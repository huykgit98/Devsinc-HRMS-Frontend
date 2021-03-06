import request from "./request";

export const createRole = (params, successAction, failureAction) => {
  return request('admin/roles', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction, true);
};

export const fetchRoles = (successAction, failureAction) => {
  return request('admin/roles', {}, successAction, failureAction, true);
};

export const deleteRole = (params, successAction, failureAction) => {
  return request(`admin/roles/${params}`, { method: 'DELETE' }, successAction, failureAction, true);
};

export const getRole = (id , successAction, failureAction) => {
  return request(`admin/roles/${id}`, {}, successAction, failureAction, true);
};

export const updateRole = (params, id, successAction, failureAction) => {
  return request(`admin/roles/${id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction, true);
};

export const fetchUsersForRole = (id , successAction, failureAction) => {
  return request(`admin/roles/${id}/assignable_users`, {}, successAction, failureAction, true);
};

export const addUsersToRole = (params, successAction, failureAction) => {
  return request(`admin/roles/${params.role_id}/add_users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction,true);
};

export const removeUserFromRole = (params, successAction, failureAction) => {
  return request(`admin/roles/${params.role_id}/remove_user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params)
  }, successAction, failureAction,true);
};

export const allowPermissionToRole = (params,successAction,failureAction) => {
  return request(`admin/roles/${params.role_id}/allow_permission`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({role: params})
  },successAction,failureAction,true);
};

export const revokePermissionFromRole = (params,successAction,failureAction) => {
  return request(`admin/roles/${params.role_id}/revoke_permission`,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({role: params})
  },successAction,failureAction,true);
};
