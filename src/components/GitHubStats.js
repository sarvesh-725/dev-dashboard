import { useState } from "react";

function GitHubSearch() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUser = () => {
        if (!username.trim()) return;

        setLoading(true);
        setError("");
        setUserData(null);

        fetch(`https://api.github.com/users/${username}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("User not found");
                }
                return res.json();
            })
            .then((data) => {
                setUserData(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            fetchUser();
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md bg-white text-black dark:bg-gray-800 dark:text-white max-w-md mx-auto">
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-grow p-2 border rounded text-black"
                />
                <button
                    onClick={fetchUser}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                    Search
                </button>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {userData && (
                <div className="mt-4">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={userData.avatar_url}
                            alt={userData.login}
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <h2 className="text-lg font-bold">
                                {userData.name || userData.login}
                            </h2>
                            <a
                                href={userData.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-sm"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 text-center gap-4">
                        <div>
                            <p className="text-xl font-bold">{userData.public_repos}</p>
                            <p className="text-sm">Repos</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{userData.followers}</p>
                            <p className="text-sm">Followers</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">{userData.following}</p>
                            <p className="text-sm">Following</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default GitHubSearch;
