import { useState } from "react";
import BASE_URL from "../helpers/url";
import axios from "axios";

function Home() {
  const [Url, setUrl] = useState("");
  const [ShortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ShortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const urlInput = e.target.elements.url.value.trim();
    setUrl(urlInput);

    try {
      const response = await axios.post(`${BASE_URL}/generate-url`, {
        url: urlInput,
        expires_after: 30,
      });

      console.log(response.data);
      setUrl("");
      setShortUrl(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gray-800">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="url" className="block mb-2 font-medium">
              Enter URL
            </label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="Enter URL"
              value={Url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Shorten URL
          </button>
        </form>
      </div>

      {ShortUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Shortened URL</h2>
          <input
        type="text"
        value={ShortUrl}
        readOnly
        className="mt-4 px-4 py-2 text-blue-500 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
          <button
            onClick={handleCopy}
            className={`mt-2 px-4 py-2 text-white rounded-md hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              copied
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {copied ? "Copied !" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
