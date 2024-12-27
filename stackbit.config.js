module.exports = {
  stackbitVersion: "~0.6.0",
  ssgName: 'create-react-app', // Specify Create React App
  nodeVersion: '18',
  devCommand: 'npm start', // Change to 'npm start' for CRA
  buildCommand: 'npm run build',
  publishDir: 'build', // Default publish directory for CRA
  contentSources: [
    {
      type: 'git',
      repoUrl: 'https://github.com/davynormal/project-crazyology.git',
      branch: 'main'
    }
  ],
  models: {
    page: {
      type: 'page',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'markdown' }
      ]
    }
  }
};