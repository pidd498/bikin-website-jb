import { startServer } from '../server/index.js';
import { createServer, ViteDevServer } from 'vite';

let viteServer: ViteDevServer | undefined;

async function startDev() {
  try {
    // Start the Express API server first
    await startServer(3001);
    console.log('Express API server started on port 3001');

    // Then start Vite in dev mode
    viteServer = await createServer({
      configFile: './vite.config.js',
    });

    await viteServer.listen();
    console.log(
      `Vite dev server running on port ${viteServer.config.server.port}`,
    );
  } catch (error) {
    console.error('Error starting dev servers:', error);
    process.exit(1);
  }
}

// Handle tsx watch restarts
process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, closing servers gracefully...');

  if (viteServer) {
    try {
      await viteServer.close();
      console.log('Vite server closed successfully');
    } catch (err) {
      console.error('Error closing Vite server:', err);
    }
  }

  process.exit(0);
});

startDev();