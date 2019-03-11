import { LOAD_DASHBOARD, LOAD_DASHBOARD_SUCCESS, LOAD_DASHBOARD_ERROR } from "../constants";

const loadDashboard = () => ({
    type: LOAD_DASHBOARD,
    payload: null
});

const loadDashboardLoaded = (response) => ({
    type: LOAD_DASHBOARD_SUCCESS,
    response
});

const loadDashabordFailed = (err) => ({
    type: LOAD_DASHBOARD_ERROR,
    error: err
});

export { loadDashboard, loadDashabordFailed, loadDashboardLoaded };
