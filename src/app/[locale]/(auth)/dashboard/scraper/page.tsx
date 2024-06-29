
'use client';

import { useState } from 'react';

export default function Home() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const authenticateWhatsApp = async () => {
    setIsAuthenticating(true);
    setStatus(null);
    setError(null);
    setLogs([]);

    try {
      const response = await fetch('/api/whatsapp-auth');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || 'Failed to authenticate with WhatsApp');
      }

      setStatus(data.status);
      setLogs(data.logs || []);
    } catch (err) {
      setError(err.message || 'An error occurred during authentication');
      console.error(err);
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">WhatsApp Web Authentication</h1>
      <button
        onClick={authenticateWhatsApp}
        disabled={isAuthenticating}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        {isAuthenticating ? 'Authenticating...' : 'Start WhatsApp Auth'}
      </button>
      {status && (
        <p className="mt-4 text-green-600">Status: {status}</p>
      )}
      {error && (
        <p className="mt-4 text-red-600">Error: {error}</p>
      )}
      {logs.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Logs:</h2>
          <pre className="bg-gray-100 p-2 mt-2 rounded">
            {logs.join('\n')}
          </pre>
        </div>
      )}
    </div>
  );
}