window.onload = function() {
    _onload();
}

const REMOTE_URL = 'https://agility-page-1709.scratch.my.salesforce.com';

function _onload() {
   console.log('yay');
}

function callSalesforce() {
    const token = authenticate();
    console.log('Did it work? ' + token);
}

function authenticate() {
    const requestBody = 'client_id=3MVG9f_NjrvdVIAwcGGwjEmxZ58sIZzXt0CokeTQ9hS75NH9wf37mQe_RjvN1EkE6_VfLhF_oLsiLtBJzazQi' +
        '&client_secret=2D8542C3DAC816A0AE633BB338DF6A0853E0861DF3B1EECABF2ABD6B954471B8' +
        '&grant_type=client_credentials';

    const tokenURL = REMOTE_URL + '/services/oauth2/token';
    const requestObj = {
        method: 'POST',
        body: requestBody
    };
    const response = makeRequest(tokenURL, requestObj);
    console.log(response);
    return response['access_token'];
}

const makeRequest = async(url, request) => {
   const response = await fetch(url, request);
   return response.json();
}
