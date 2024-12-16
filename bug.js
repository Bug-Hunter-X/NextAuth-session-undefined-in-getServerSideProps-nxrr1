```javascript
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Page({ params }) {
  const session = await unstable_getServerSession(authOptions);
  console.log('Session:', session);
  return <div>Hello</div>;
}
```