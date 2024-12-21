```javascript
import {unstable_getServerSession} from "next-auth";

export default function Profile({session}) {
  if (!session) {
    return (
      <div>
        Not logged in
      </div>
    );
  }
  // ...
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context);
  return {
    props: {
      session,
    },
  };
}
```