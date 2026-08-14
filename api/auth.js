export default async function handler(req, res) {
  const { code, provider } = req.query;

  // Si viene con provider=github, redirigir a GitHub para autorización
  if (provider === 'github' && !code) {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      scope: 'repo',
      redirect_uri: 'https://federico-tripicchio.vercel.app/api/auth',
    });
    return res.redirect(`https://github.com/login/oauth/authorize?${params}`);
  }

  // Si viene con code, intercambiar por token
  if (code) {
    try {
      const response = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const data = await response.json();

      if (data.error) {
        return res.status(400).json({ error: data.error });
      }

      const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      <\/script>`;

      return res.status(200).send(`<!DOCTYPE html><html><body>${script}</body></html>`);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(400).json({ error: 'No code provided' });
}
