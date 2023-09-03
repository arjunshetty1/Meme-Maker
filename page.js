
"use client"
import { useRouter } from 'next/router';

const View = () => {
  const router = useRouter();
  const { url } = router.query;

  console.log(url);

  return (
    <>
      {/* Your component JSX */}
    </>
  );
}

export default View;
