type Props = {}

export function Navbar({}: Props) {
    return (
        <nav className="navbar">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">TEAM</a>
        </nav>
    );
}

export function Navbar2({}: Props) {
    return (
        <nav className=" text-white bg-orange-300 font-bold text-[20px] flex gap-[50px] 
        flex-col
        sm:flex-row
        sticky top-0 p-[10px]">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">TEAM</a>
        </nav>
    );
}