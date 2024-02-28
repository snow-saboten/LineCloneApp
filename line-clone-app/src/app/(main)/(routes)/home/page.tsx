import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
    return (
        <div>
            This is a Home.
            <br />
            <UserButton />
        </div>
    );
}

export default HomePage;