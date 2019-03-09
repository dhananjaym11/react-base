import { LOAD_DASHBOARD, LOAD_DASHBOARD_SUCCESS, LOAD_DASHBOARD_ERROR } from "../constants";

const loadDashboard = () => ({
    type: LOAD_DASHBOARD,
    payload: null
});

const dashboardLoaded = (response) => ({
    type: LOAD_DASHBOARD_SUCCESS,
    response
});

const dashabordFailed = (err) => ({
    type: LOAD_DASHBOARD_ERROR,
    error: err
});

export { loadDashboard, dashabordFailed, dashboardLoaded };
