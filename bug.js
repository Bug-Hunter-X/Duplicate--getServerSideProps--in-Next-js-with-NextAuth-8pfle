```javascript
import {unstable_getServerSession} from "next-auth";

async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session: session,
    },
  };
}

export default function Profile() {
  // ...
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  // ...
}
```