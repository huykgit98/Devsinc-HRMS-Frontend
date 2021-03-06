import request from "./request";

export const createLeave = (params, successAction, failureAction) => {
  return request('leaves', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({leave: params})
  }, successAction, failureAction, true);
};

export const fetchLeaves = (successAction, failureAction) => {
  return request('leaves',{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  },successAction,failureAction, true);
};

export const fetchLeaveApprovals = (successAction, failureAction) => {
  return request('leaves/leave_approvals',{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  },successAction,failureAction, true);
};

export const createLeaveStatus = (params,successAction,failureAction) => {
  return request('leave_statuses',{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({leave_status: params})
  },successAction,failureAction, true);
};

export const fetchUserLeavesHistory = (params,successAction,failureAction) => {
  return request(`leaves/user_leaves_history?user_id=${params.user_id}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  },successAction,failureAction, true);
};

export const fetchLeaveLifeCycle = (params,successAction,failureAction) => {
  return request(`leave_statuses?leave_id=${params.leave_id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  },successAction,failureAction, true);
};

export const fetchAllLeavesSummary = (successAction, failureAction) => {
  return request('leaves/all_leaves',{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  },successAction,failureAction,true)
};

export const fetchAllUsersLeaveHistory = (params,successAction,failureAction) => {
  return request(`leaves/${params.user_id}/get_user_leaves`,{
    method: 'GET',
    headers: {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
  },successAction,failureAction, true);
};
