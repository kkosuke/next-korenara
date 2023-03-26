import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
};

const TextLink: React.FC<Props> = (props) => {
  const { text, href } = props;
  return (
    <Link
      href={href}
      className="text-primary-500 underline hover:no-underline active:no-underline"
    >
      {text}
    </Link>
  );
};

export default TextLink;
