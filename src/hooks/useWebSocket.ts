import { useState, useEffect, useCallback } from 'react';

export default function useWebSocket(url: string) {
  const [lastMessage, setLastMessage] = useState<string | null>(null);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    // In a real implementation, connect to actual WebSocket server
    // For demo, we'll simulate WebSocket behavior
    const mockWs = {
      send: (message: string) => {
        // Simulate receiving a message
        setTimeout(() => {
          if (Math.random() > 0.5) {
            setLastMessage(JSON.stringify({
              type: 'typing',
              senderId: 'other'
            }));
          }
        }, 1000);
      }
    };

    setWs(mockWs as any);

    return () => {
      // Cleanup
    };
  }, [url]);

  const sendMessage = useCallback((message: string) => {
    if (ws) {
      ws.send(message);
    }
  }, [ws]);

  return { lastMessage, sendMessage };
}