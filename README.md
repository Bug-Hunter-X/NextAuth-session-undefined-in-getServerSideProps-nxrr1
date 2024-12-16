# NextAuth Session Undefined in getServerSideProps

This repository demonstrates a common issue encountered when using NextAuth.js with `getServerSideProps` in Next.js.  The problem is that the session object returned from `unstable_getServerSession` is consistently undefined, even though the user is successfully logged in.

## Bug Description

The `bug.js` file contains a Next.js page that attempts to access the user session using `unstable_getServerSession`. The session object is logged to the console, but it always returns `null`, regardless of the user's authentication status. This leads to unexpected behavior in the application since the app is unable to verify user login status.

## Solution

The solution involves correctly setting up the `getServerSideProps` function to handle the async operation and access the session object properly.