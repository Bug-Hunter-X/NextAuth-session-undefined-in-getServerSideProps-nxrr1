```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Page({ params }) {
  const session = await unstable_getServerSession(authOptions);
  console.log('Session:', session);
  return (
    <div>
      {session ? (
        <>
          <p>Hello, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
        </>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session,
    },
  };
}
```