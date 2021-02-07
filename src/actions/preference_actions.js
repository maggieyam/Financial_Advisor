import { preferences } from "../util/preference_util";

export const RECEIVE_PREFERENCES = "RECEIVE_PREFERENCES";

export const fetchPreferences = () => {
    return {type: RECEIVE_PREFERENCES, preferences}
}

