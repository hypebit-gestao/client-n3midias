import Image from "next/image";

const Logo = () => {
  return (
    <div className="cursor-pointer">
      <Image src="/logo.png" alt="Logo N3Midias" width={80} height={80} />
    </div>
  );
};

export default Logo;
