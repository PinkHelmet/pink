import Link from "next/link";

const RedirectButton = ({ href, redirectTo }) => {
  return (
    <div className="border px-10 py-6 m-6 rounded bg-pink-rose text-black hover:bg-pink-600 hover:text-white transition transition-duration-300">
      <Link href={`/${href}`} className="px-10 py-6">
        {`${redirectTo}`}
      </Link>
    </div>
  );
};

export default RedirectButton;
