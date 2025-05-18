
import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));

    // Simulate card analysis
    setTimeout(() => {
      setResult({
        cardName: 'Charizard VMAX',
        authenticity: 'Likely Fake',
        issues: ['Unrealistic HP', 'Incorrect text format', 'Unknown symbol placement'],
      });
    }, 1500);
  };

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <div className="bg-white rounded shadow p-4 space-y-4">
        <h2 className="text-xl font-bold">Pokémon Card Scanner</h2>
        <input type="file" accept="image/*" onChange={handleUpload} className="block w-full" />
        {image && <img src={image} alt="Uploaded card" className="w-full rounded shadow" />}
        {result && (
          <div className="bg-gray-100 p-3 rounded space-y-1">
            <p><strong>Card:</strong> {result.cardName}</p>
            <p><strong>Authenticity:</strong> {result.authenticity}</p>
            <ul className="list-disc pl-5 text-sm text-red-600">
              {result.issues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
