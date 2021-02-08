import { preferences } from "../util/preference_util";

export const RECEIVE_PREFERENCES = "RECEIVE_PREFERENCES";
export const RECEIVE_PREFERENCE = "RECEIVE_PREFERENCE";

export const fetchPreferences = () => {
    return {type: RECEIVE_PREFERENCES, preferences}
}
export const fetchPreference = risk => {
    return {type: RECEIVE_PREFERENCE, preference: preferences[risk]}
}

