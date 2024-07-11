import { headerDropdownItems } from "@/core/data/menu-items";
import { ListItem } from "./navbar";

export default function MobileNav() {
    return (
        <div className="navbar bg-icon-hover border border-border sm:hidden">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                        {headerDropdownItems.map((items) => (
                            <ListItem
                                key={items.title}
                                title={items.title}
                                href={items.href}
                            >
                                {items.description}
                            </ListItem>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}