export const NEXT_FIVE_LAUNCH_API_URL = 'https://launchlibrary.net/1.3/launch?next=5';

export const LAUNCH_ACTION_TYPES = {
    GET_NEXT_FIVE_LAUNCHES: 'GET_NEXT_FIVE_LAUNCHES'
};


export function getNextFiveLaunches(data) {
    console.log('IN ACTION');
    return {
        type: LAUNCH_ACTION_TYPES.GET_NEXT_FIVE_LAUNCHES,
        data
    }
}

export const callNextFiveLaunches =() => {
    return function (dispatch) {
        fetch(NEXT_FIVE_LAUNCH_API_URL)
            .then( response => response.json())
            .then( data => {
                dispatch(getNextFiveLaunches(data));
            }).catch((err) => {
            console.log(err);
        })
    }
}