import NextAuth, { RequestInternal, User } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios";

async function refreshAccessToken(tokenObject: any) {
  try {
    // Get a new set of tokens with a refreshToken
    const tokenResponse = await axios.post('https://studiofact.group/auth/refresh', {
      token: tokenObject.refreshToken
    });

    console.log(tokenResponse)

    return {
      ...tokenObject,
      accessToken: tokenResponse.data.accessToken,
      accessTokenExpiry: tokenResponse.data.accessTokenExpiry,
      refreshToken: tokenResponse.data.refreshToken
    }
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    }
  }
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Identifiant", type: "text", placeholder: "Identifiant" },
        password: { label: "Mot de passe", type: "password", placeholder: "*********"}
      },

      async authorize(credentials: any, req: any): Promise<any> {
        try {
          console.log('here')
          console.log(credentials)
          const res = await fetch("https://studiofact.group/auth/signin", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          console.log('res')
          const user:any = await res.json()
          console.log(res)
          console.log(user)

          // If no error and we have user data, return it
          if (res.ok && user && user.tokens) {
            return user.tokens
          }
          // Return null if user data could not be retrieved
          return null
        } catch (e: any) {
          throw new Error(e);
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      if (user) {
        // This will only be executed at login. Each next invocation will skip this part.
        token.accessToken = user.accessToken;
        token.accessTokenExpiry = user.accessTokenExpiry;
        token.refreshToken = user.refreshToken;
      }

      // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
      const shouldRefreshTime = Math.round((token.accessTokenExpiry - 60 * 60 * 1000) - Date.now());

      // If the token is still valid, just return it.
      if (shouldRefreshTime > 0) {
        return Promise.resolve(token);
      }

      // If the call arrives after 23 hours have passed, we allow to refresh the token.
      token = refreshAccessToken(token);
      return Promise.resolve(token);
    },
    session: async ({ session, token }: any) => {
      // Here we pass accessToken to the client to be used in authentication with your API
      session.accessToken = token.accessToken;
      session.accessTokenExpiry = token.accessTokenExpiry;
      session.error = token.error;

      return Promise.resolve(session);
    },
  },
  pages: {
  },
}

export default NextAuth(authOptions)