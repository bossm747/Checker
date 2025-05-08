import React, { useEffect, useState } from 'react';

export default function Home() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    async function loadHtml() {
      const response = await fetch('/index.html');
      const text = await response.text();
      setHtml(text);
    }

    loadHtml();
  }, []);

  return (
    <html>
      <head>
        <title>My Next.js App</title>
        <link rel="stylesheet" href="/style.css" />
        <script src="/script.js"></script>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
      </body>
    </html>
  );
}
