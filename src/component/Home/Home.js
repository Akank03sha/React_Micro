import ProfileCard from "../ProfileCard/ProfileCard";
import Notes from "../Notes/Notes";

const Home = () => {
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                background: "black",
                paddingLeft: "3vw",
                paddingTop: "3vh",
                boxSizing: "border-box",
            }}
        >
            <div style={{ display: "flex", gap: "20px" }}>
                <div>
                    <ProfileCard />
                </div>
                <div>
                    <Notes />
                </div>
                <div>// new component</div>
            </div>
            <button
                style={{
                    position: "absolute",
                    bottom: "2vh",
                    right: "3vw",
                    background: "green",
                    border: "none",
                    color: "white",
                    padding: "6px",
                    borderRadius: "12px",
                }}
            >
                Next Page
            </button>
        </div>
    );
};

export default Home;
