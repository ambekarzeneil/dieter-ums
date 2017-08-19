// @flow
import request from 'request-promise';

export const loginWithPassword = async (username : string, password : string, scopes: string[]) => {

    const scope : string = scopes.join(' ');
    const auth0Domain :? string  = process.env.AUTH0_DOMAIN;
    const audience :? string = process.env.AUTH0_API_ID;
    const client_id :? string = process.env.AUTH0_CLIENT_ID;
    const client_secret :? string = process.env.AUTH0_CLIENT_SECRET;
    const connection = "Username-Password-Authentication";

    if(!auth0Domain || !audience || !client_id || !client_secret) throw new Error("auth0 information not set");

    const uri = `https://${auth0Domain}/oauth/token`;
    const body : {[string] : string} = {
        grant_type: "password", username, password, audience, scope, client_id, client_secret,
        connection
    };

    const response : {
        access_token: string,
        token_type: string,
        expires_in: number
    } = await request({ json: true, method: 'POST', uri, body });

    return response.access_token;

};