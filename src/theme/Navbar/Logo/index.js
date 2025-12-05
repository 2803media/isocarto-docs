import Logo from "@theme-original/Navbar/Logo";

export default function LogoWrapper(props) {
  return (
    <>
      <div className="flex items-center">
        <Logo {...props} className="self-center" />
        <div className="flex items-baseline -ml-4">
          <span className="text-xl sm:text-xl lg:text-2xl font-extrabold tracking-tighter leading-none text-slate-900 dark:text-white">
            <span className="text-yellow-500 dark:text-yellow-400">iso</span>
            carto
          </span>
          <span className="ml-2 pr-2 text-sm lg:text-base font-semibold leading-none text-slate-600 dark:text-slate-400">
            DOCS
          </span>
        </div>
      </div>
    </>
  );
}
