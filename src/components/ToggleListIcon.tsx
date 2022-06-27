import classNames from "classnames";

interface ToggleListIconProps {
  toggleMenuIcon: boolean;
}

export function ToggleListIcon({ toggleMenuIcon }: ToggleListIconProps) {
  return (
    <button className="bg-transparent border-none outline-none cursor-pointer">
      <span className={classNames('block w-10 h-[3px] bg-blue-500 rounded-md my-[10px] transition-transform duration-500', {
        'translate-y-[13px] rotate-45': toggleMenuIcon,
      })}></span>
      <span className={classNames('block w-10 h-[3px] bg-blue-500 rounded-md transition-opacity duration-250', {
        'opacity-0': toggleMenuIcon,
      })}></span>
      <span className={classNames('block w-10 h-[3px] bg-blue-500 rounded-md my-[10px] transition-transform duration-500', {
        'translate-y-[-13px] -rotate-45': toggleMenuIcon,
      })}></span>
    </button>
  );
}